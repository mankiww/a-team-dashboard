import styled from "styled-components";
import { useState, useEffect } from "react";
import { MdAutorenew } from "react-icons/md";

import DropBox from "../components/DropBox";
import ToggleButton from "../components/ToggleButton";
import getRequests from "../api/getRequests";
import Request from "../@types/request";

const FilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 32px 0;
  white-space: nowrap;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleButtonLabel = styled.p`
  display: inline;
  margin-left: 10px;
`;

const ResetButtonWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 10px;
  cursor: pointer;

  color: #2196F3;

  &:active svg {
    box-shadow: inset;
  }
`;

export default function useFilterRequests(): [Request[], JSX.Element] {
  const [isReset, setIsReset] = useState(false);
  const [isOnlyOnProcess, setIsOnlyOnProcess] = useState(false);
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [methods, setMethods] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedMethods, setSelectedMethods] = useState([]);

  useEffect(() => {
    async function fetchRequests() {
      const requests = await getRequests();

      const methods = getItems(requests, "method");
      const materials = getItems(requests, "material");

      setRequests(requests);
      setFilteredRequests(requests);
      setMethods(methods);
      setMaterials(materials);
    }

    fetchRequests();
  }, []);

  useEffect(() => {
    if (!selectedMaterials.length && !selectedMethods.length) {
      setFilteredRequests(requests);
      return;
    }

    const filteredRequests = requests.filter(({ method, material }) => {
      if (
        selectedMaterials.length
        && !material.some((aMaterial: string) => selectedMaterials.includes(aMaterial))
      ) {
        return false;
      }

      if (
        selectedMethods.length
        && !method.some((aMethod: string) => selectedMethods.includes(aMethod))
      ) {
        return false;
      }

      return true;
    });

    setFilteredRequests(filteredRequests);
  }, [requests, selectedMaterials, selectedMethods]);

  useEffect(() => {
    if (!isReset) {
      return;
    }

    setSelectedMaterials([]);
    setSelectedMethods([]);
    setIsReset(false);
  }, [isReset]);

  const handleResetButtonClick = () => {
    setIsReset(true);
  };

  const resetButton = (
    <ResetButtonWrapper onClick={handleResetButtonClick}>
      <MdAutorenew />
      필터링 리셋
    </ResetButtonWrapper>
  );

  const filterBar = (
    <FilterBarContainer>
      <FiltersWrapper>
        <DropBox subject="가공방식" options={isReset ? [] : methods} onChange={setSelectedMethods} />
        <DropBox subject="재료" options={isReset ? [] : materials} onChange={setSelectedMaterials} />
        {resetButton}
      </FiltersWrapper>
      <div>
        <ToggleButton isChecked={isOnlyOnProcess} onToggle={setIsOnlyOnProcess} />
        <ToggleButtonLabel>상담중인 요청만 보기</ToggleButtonLabel>
      </div>
    </FilterBarContainer>
  );

  return [
    isOnlyOnProcess ? filterOnProcess(filteredRequests) : filteredRequests,
    filterBar,
  ];
}

function getItems(requests: Request[], key: string): string[] {
  const existingItems = new Set(requests.flatMap((request) => [...request[key]]));

  return [...existingItems];
}

function filterOnProcess<T extends Request>(request: T[]): T[] {
  return request.filter(({ status }) => status === "상담중");
}

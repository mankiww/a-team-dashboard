import styled from "styled-components";
import { useState, useEffect } from "react";

import Filter from "../components/Filter";
import ToggleButton from "../components/ToggleButton";
import getRequests from "../api/getRequests";
import { Request } from "../components/types";

const FilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FiltersContainer = styled.div`
  display: flex;
`;

export function useFilterRequests(): [Request[], JSX.Element] {
  const [isOnlyOnProcess, setIsOnlyOnProcess] = useState(false);
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [methods, setMethods] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedMethods, setSelectedMethods] = useState([]);

  // 걸러낼 대상을 가져온다
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

  const handleMethodFilterChange = (option: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedMethods([...selectedMethods, option]);
    } else {
      setSelectedMethods(selectedMethods.filter((selected) => selected !== option));
    }
  };

  const handleMaterialFilterChange = (option: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedMaterials([...selectedMaterials, option]);
    } else {
      setSelectedMaterials(selectedMaterials.filter((selected) => selected !== option));
    }
  };

  const filterBar = (
    <FilterBarContainer>
      <FiltersContainer>
        <Filter subject="가공방식" options={methods} onChange={handleMethodFilterChange} />
        <Filter subject="재료" options={materials} onChange={handleMaterialFilterChange} />
      </FiltersContainer>
      <div>
        <ToggleButton isChecked={isOnlyOnProcess} onToggle={setIsOnlyOnProcess} />
        상담중인 요청만 보기
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

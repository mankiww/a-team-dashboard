import styled from "styled-components";
import { useEffect, useState } from "react";

import Heading from "./Heading";
import FilterBar from "./FilterBar";
import CardList from "./CardList";
import getRequests from "../api/getRequests";

const Main = styled.div`
  padding: 155px;
`;

export default function DashBoard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function fetchRequests() {
      const requests = await getRequests();

      setRequests(requests);
    }

    fetchRequests();
  }, []);

  return (
    <Main>
      <Heading title="들어온 요청" subTitle="파트너님에게 딱 맞는 요청서를 찾아보세요" />
      <FilterBar />
      <CardList list={requests} />
    </Main>
  );
}

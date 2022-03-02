import styled from "styled-components";

import Heading from "./Heading";
import CardList from "./CardList";
import useFilterRequests from "../hooks/useFilteredRequests";

const Main = styled.div`
  padding: 155px;

  @media (max-width: 750px) {
    padding: 10px;
    margin-top: 80px;
  }
`;

export default function DashBoard() {
  const [requests, filterBar] = useFilterRequests();

  return (
    <Main>
      <Heading title="들어온 요청" subTitle="파트너님에게 딱 맞는 요청서를 찾아보세요" />
      {filterBar}
      <CardList list={requests} />
    </Main>
  );
}

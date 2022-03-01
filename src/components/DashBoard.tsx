import styled from "styled-components";

import Heading from "./Heading";
import FilterBar from "./FilterBar";
import CardList from "./CardList";

const Main = styled.div`
  padding: 155px;
`;

export default function DashBoard() {
  return (
    <Main>
      <Heading title="들어온 요청" subTitle="파트너님에게 딱 맞는 요청서를 찾아보세요" />
      <FilterBar />
      <CardList />
    </Main>
  );
}

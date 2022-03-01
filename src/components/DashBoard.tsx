import styled from "styled-components";

import ToggleButton from "./ToggleButton";
import CardList from "./CardList";

const Main = styled.div`
  padding: 155px;
`;

const Heading = styled.div`
  color: #323D45;
`;

const Title = styled.h1`
  margin-bottom: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
`;

const SubTitle = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default function DashBoard() {
  return (
    <Main>
      <Heading>
        <Title>들어온 요청</Title>
        <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요</SubTitle>
      </Heading>
      <FilterBar>
        <div>
          <select>
            <option>가공방식</option>
          </select>
          <select>
            <option>재료</option>
          </select>
        </div>
        <div>
          <ToggleButton />
          상담중인 요청만 보기
        </div>
      </FilterBar>
      <CardList />
    </Main>
  );
}

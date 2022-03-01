import styled from "styled-components";

import Heading from "./Heading";
import Filter from "./Filter";
import ToggleButton from "./ToggleButton";
import CardList from "./CardList";

const Main = styled.div`
  padding: 155px;
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
      <Heading title="들어온 요청" subTitle="파트너님에게 딱 맞는 요청서를 찾아보세요" />
      <FilterBar>
        <div>
          <select>
            <option>재료</option>
          </select>
        </div>
        <div>
          <ToggleButton isChecked={false} onToggle={(isChecked) => console.log(isChecked)} />
          상담중인 요청만 보기
        </div>
      </FilterBar>
      <CardList />
    </Main>
  );
}

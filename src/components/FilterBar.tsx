import styled from "styled-components";

import Filter from "./Filter";
import ToggleButton from "./ToggleButton";

const FilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default function FilterBar() {
  return (
    <FilterBarContainer>
      <div>
        <Filter subject="가공방법" options={["선반"]} />
        <Filter subject="재료" options={["알루미늄"]} />
      </div>
      <div>
        <ToggleButton isChecked={false} onToggle={(isChecked) => console.log(isChecked)} />
        상담중인 요청만 보기
      </div>
    </FilterBarContainer>
  );
}

import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";

import Header from "./components/Header";
import CardList from "./components/CardList";

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

const ToggleButton = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 100%;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
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
            <ToggleButton htmlFor="toggle" className="switch">
              <input name="toggle" type="checkbox" />
              <span className="slider round" />
            </ToggleButton>
            상담중인 요청만 보기
          </div>
        </FilterBar>
        <CardList />
      </Main>
    </div>
  );
}

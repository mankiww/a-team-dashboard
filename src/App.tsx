import styled from "styled-components";
import { MdDomain } from "react-icons/md";

import logo from "./image/logo.png";
import GlobalStyle from "./GlobalStyle";

const Header = styled.header`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  height: 70px;
  color: #ffffff;
  background: #1565C0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

const Image = styled.img`
  position: absolute;
  left: 2.78%;
  right: 86.6%;
  top: 35.71%;
  bottom: 35.71%;
`;

const LoginInfo = styled.div`
  position: absolute;
  right: 40px;
  top: 25px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 208.67px;
  height: 20px;
  padding: 0px;

  color: #FFFFFF;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 105.67px;
  height: 20px;

  svg {
    margin: 0 5px;
  }
`;

const UserName = styled.div`
  text-align: end;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
`;

const Divider = styled.div`
  height: 10px;
  border: 1px solid #FFFFFF;
  margin: 0px 32px;
`;

const Button = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  white-space: nowrap;

  color: #FFFFFF;
`;

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

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: blue 1px solid;
  width: 366px;
  height: 356px;
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
      <Header>
        <Image src={logo} alt="CAPA파트너스" />
        <LoginInfo>
          <UserInfo>
            <MdDomain />
            <UserName>A 가공 업체</UserName>
          </UserInfo>
          <Divider />
          <Button>로그아웃</Button>
        </LoginInfo>
      </Header>
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
        <CardList>
          {new Array(6).fill(null).map(() => <Card />)}
        </CardList>
      </Main>
    </div>
  );
}

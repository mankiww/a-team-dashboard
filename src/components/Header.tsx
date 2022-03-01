import styled from "styled-components";
import { MdDomain } from "react-icons/md";

import logo from "../image/logo.png";

const HeaderContainer = styled.header`
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

const Logo = styled.img`
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
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="CAPA파트너스" />
      <LoginInfo>
        <UserInfo>
          <MdDomain />
          <UserName>A 가공 업체</UserName>
        </UserInfo>
        <Divider />
        <Button>로그아웃</Button>
      </LoginInfo>
    </HeaderContainer>
  );
}

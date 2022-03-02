import styled from "styled-components";
import { MdMenu } from "react-icons/md";

import { useState } from "react";
import logo from "../image/logo.png";
import UserInfo from "./UserInfo";
import Logout from "./Logout";
import MenuBar from "./MenuBar";

const HeaderContainer = styled.header`
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 70px;
  padding: 10px 20px;

  color: #ffffff;
  background: #1565C0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: 450px) {
    justify-content: flex-start;
    height: 44px;
  }
`;

const Logo = styled.img`
  margin: 0 20px;

  @media (max-width: 450px) {
    width: 92px;
    height: 12px;
  }
`;

const LoginInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;

  @media (max-width: 450px) {
    div {
      display: none;
    }
  }
`;

const Divider = styled.div`
  height: 10px;
  border: 1px solid #FFFFFF;
  margin: 0px 32px;
`;

const MenuButton = styled.div`
  display: none;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 450px) {
    display: block;
  }
`;

export default function Header() {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  const handleMenuButtonClick = () => {
    setIsShowingMenu(true);
  };

  const handleMenuClose = () => {
    setIsShowingMenu(false);
  };

  return (
    <HeaderContainer>
      {isShowingMenu && <MenuBar onClose={handleMenuClose} name="A 가공 업체" />}
      <MenuButton>
        <MdMenu onClick={handleMenuButtonClick} />
      </MenuButton>
      <Logo src={logo} alt="CAPA파트너스" />
      <LoginInfo>
        <UserInfo name="A 가공 업체" />
        <Divider />
        <Logout />
      </LoginInfo>
    </HeaderContainer>
  );
}

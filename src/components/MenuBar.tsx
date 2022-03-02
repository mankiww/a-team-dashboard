import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import colorLogo from "../image/color_logo.png";
import UserInfo from "./UserInfo";
import Logout from "./Logout";

const MenuBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  display: block;
  width: 100%;
  height: 100%;
  background-color: #00000088;

  &.closing {
    background-color: #00000000;
    transition: 1s;
  }
`;

const MenuBarContainer = styled.div`
  width: 280px;
  height: 100%;

  background-color: #ffffff;
  overflow: hidden;

  animation: appear 1s;

  &.closing {
    animation: disappear 1s;
  }

  @keyframes appear {
    from { transform: translateX(-100%) }
    to { transform: translateX(0) }
  }

  @keyframes disappear {
    from { transform: translateX(0) }
    to { transform: translateX(-100%) }
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 36px 32px;
`;

const LogoContainer = styled.div`
  z-index: 3;

  display: flex;
  align-items: center;
  width: 280px;
  height: 44px;
  padding: 0 16px;
  border-bottom: 1px solid #E5E5E5;
  background-color: #ffffff;
`;

interface MenubarProps {
  name?: string,
  onClose: () => void,
}

export default function MenuBar({ name, onClose }: MenubarProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleBackGroundClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (ev.currentTarget === ev.target) {
      setIsClosing(true);

      setTimeout(() => {
        onClose();
      }, 1000);
    }
  };

  return ReactDOM.createPortal(
    <MenuBarWrapper onClick={handleBackGroundClick} className={isClosing ? "closing" : ""}>
      <MenuBarContainer className={isClosing ? "closing" : ""}>
        <LogoContainer>
          <img src={colorLogo} alt="CAPA파트너스" />
        </LogoContainer>
        <MenuWrapper>
          <UserInfo name={name} />
          <Logout />
        </MenuWrapper>
      </MenuBarContainer>
    </MenuBarWrapper>,
    document.getElementById("menu"),
  );
}

import styled from "styled-components";

const Button = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  white-space: nowrap;
`;

export default function Logout() {
  return (<Button>로그아웃</Button>);
}

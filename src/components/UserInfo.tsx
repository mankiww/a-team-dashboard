import styled from "styled-components";
import { MdDomain } from "react-icons/md";

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  margin-left: 5px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  white-space: nowrap;
`;

interface UserInfoProps {
  name: string,
}

export default function UserInfo({ name }: UserInfoProps) {
  return (
    <UserInfoContainer>
      <MdDomain />
      <UserName>{name}</UserName>
    </UserInfoContainer>
  );
}

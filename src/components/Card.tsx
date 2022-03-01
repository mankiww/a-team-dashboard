import styled from "styled-components";

import { Request } from "./types";

const CardWrapper = styled.div`
  position: relative;
  border: blue 1px solid;
  width: 366px;
  height: 356px;
`;

const Heading = styled.div`
`;

const Status = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  transform: translateX(-100%);
  white-space: nowrap;
  padding: 10px;
`;

const DescriptionList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

type CardProps = Request;

export default function Card({
  title, client, due, count, amount, method, material, status,
}: CardProps) {
  return (
    <CardWrapper>
      <Heading>
        <h1>{title}</h1>
        <h2>{client}</h2>
        <h3>{`${due}까지 납기`}</h3>
        <Status>{status}</Status>
      </Heading>
      <DescriptionList>
        <dt>도면개수</dt>
        <dd>{count}</dd>
        <dt>총 수량</dt>
        <dd>{amount}</dd>
        <dt>가공방식</dt>
        <dd>{method.join(", ")}</dd>
        <dt>재료</dt>
        <dd>{material.join(", ")}</dd>
      </DescriptionList>
      <div>
        <button type="button">요청 내역 보기</button>
        <button type="button">채팅하기</button>
      </div>
    </CardWrapper>
  );
}

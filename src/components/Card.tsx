import styled from "styled-components";

import Request from "../@types/request";

const CardWrapper = styled.div`
  position: relative;
  width: 366px;
  height: 356px;
  padding: 24px 16px;
  border-radius: 4px;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  color: #323D45;

  &:hover {
    border: 2px solid #2196F3;
  }
`;

const Heading = styled.div`
  margin: 8px 0;

  h1 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  h2 {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`;

const Due = styled.p`
  margin: 16px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  color: #939FA5;
`;

const Divider = styled.hr`
  width: 334px;
  border: 1px solid #E5E5E5;
`;

const Status = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  transform: translate(calc(-100% - 16px), 24px);
  padding: 2px 8px;

  border-radius: 12px;
  border: 1px solid #FFA000;
  color: #FFA000;

  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
`;

const DescriptionList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 8px;
  margin: 32px 0;

  dt {
    font-weight: 400;
  }

  dd {
    font-weight: 600;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
  height: 32px;
  margin: 32px 0;
`;

const BlueButton = styled.button`
  border: none;
  color: #FFFFFF;
  background-color: #2196F3;
  font-weight: 500;
`;

const WhiteButton = styled.button`
  border: 1px solid #2196F3;
  color: #2196F3;
  background-color: #ffffff;
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
      </Heading>
      <Due>{`${due}까지 납기`}</Due>
      {status === "상담중" && <Status>{status}</Status>}
      <Divider />
      <DescriptionList>
        <dt>도면개수</dt>
        <dd>{`${count}개`}</dd>
        <dt>총 수량</dt>
        <dd>{`${amount}개`}</dd>
        <dt>가공방식</dt>
        <dd>{method.join(", ")}</dd>
        <dt>재료</dt>
        <dd>{material.join(", ")}</dd>
      </DescriptionList>
      <ButtonsWrapper>
        <BlueButton type="button">요청 내역 보기</BlueButton>
        <WhiteButton type="button">채팅하기</WhiteButton>
      </ButtonsWrapper>
    </CardWrapper>
  );
}

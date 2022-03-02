import styled from "styled-components";

import Card from "./Card";
import Request from "../@types/request";

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(344px, 1fr));
  gap: 16px;
  flex-wrap: wrap;
`;

interface CardListProps {
  list: Request[],
}

export default function CardList({ list }: CardListProps) {
  return (
    <CardListContainer>
      {list.length !== 0
        ? list.map((info) => <Card key={info.id} {...info} />)
        : <div>조건에 맞는 견적사항이 없습니다.</div>}
    </CardListContainer>
  );
}

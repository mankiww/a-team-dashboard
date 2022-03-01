import styled from "styled-components";

import Card from "./Card";
import { Request } from "./types";

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface CardListProps {
  list: Request[],
}

export default function CardList({ list }: CardListProps) {
  return (
    <CardListContainer>
      {list.map((info) => <Card key={info.id} {...info} />)}
    </CardListContainer>
  );
}

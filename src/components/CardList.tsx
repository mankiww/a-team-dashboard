import styled from "styled-components";

import Card from "./Card";

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function CardList() {
  return (
    <CardListContainer>
      {new Array(6).fill(null).map(() => <Card title="title" client="client" due="2020.12.14" count={2} amount={100} method={["밀링", "선반"]} material={["알루미늄"]} status="대기중" />)}
    </CardListContainer>
  );
}

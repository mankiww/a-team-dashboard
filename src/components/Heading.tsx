import styled from "styled-components";

const HeadingContainer = styled.div`
  color: #323D45;
`;

const Title = styled.h1`
  margin-bottom: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
`;

const SubTitle = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

interface HeadingProps {
  title: string,
  subTitle: string,
}

export default function Heading({ title, subTitle }: HeadingProps) {
  return (
    <HeadingContainer>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </HeadingContainer>
  );
}

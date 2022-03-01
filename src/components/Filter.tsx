import React from "react";
import styled from "styled-components";

const MultipleSelectorContainer = styled.span`
  position: relative;

  .items {
    display: none;
  }
`;

interface FilterProps {
  subject: string,
  options: string[],
}

export default function Filter({ subject, options }: FilterProps) {
  const handleClick = (ev: React.MouseEvent<HTMLSelectElement>) => {
    ev.preventDefault();
  };

  const optionsElement = options.map((option) => (
    <label htmlFor={option} key={option}>
      <input id={option} type="checkbox" />
      {option}
    </label>
  ));

  return (
    <MultipleSelectorContainer>
      <select
        onClick={handleClick}
        onMouseDown={handleClick}
      >
        <option>{subject}</option>
      </select>
      <div className="items">
        {optionsElement}
      </div>
    </MultipleSelectorContainer>
  );
}

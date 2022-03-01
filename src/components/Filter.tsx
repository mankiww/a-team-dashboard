import React, { useState } from "react";
import styled from "styled-components";

const MultipleSelectorContainer = styled.div`
  position: relative;
  display: inline-block;
  width: max-content;

  &:hover div {
    display: flex;
    flex-direction: column;
  }
`;

const FakeSelector = styled.select`
  cursor: pointer;
`;

const Options = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  width: max-content;
  padding: 10px 15px 10px 5px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: #f9f9f9;

  label:hover {
    background-color: #f1f1f1;
  }
`;

interface FilterProps {
  subject: string,
  options: string[],
  onChange: (option: string, isSelected: boolean) => void,
}

export default function Filter({ subject, options, onChange }: FilterProps) {
  const handleClick = (ev: React.MouseEvent<HTMLSelectElement>) => {
    ev.preventDefault();
  };

  const handleOptionChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange(ev.target.value, ev.target.checked);
  };

  const optionsElement = options.map((option) => (
    <label htmlFor={option} key={option}>
      <input id={option} value={option} type="checkbox" onChange={handleOptionChange} />
      {option}
    </label>
  ));

  return (
    <MultipleSelectorContainer>
      <FakeSelector
        onClick={handleClick}
        onMouseDown={handleClick}
      >
        <option>{subject}</option>
      </FakeSelector>
      <Options>
        {optionsElement}
      </Options>
    </MultipleSelectorContainer>
  );
}

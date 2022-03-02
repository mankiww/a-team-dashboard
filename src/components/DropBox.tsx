import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MultipleSelectorContainer = styled.div`
  position: relative;
  display: inline-block;
  width: max-content;

  &:hover div {
    display: flex;
    flex-direction: column;
  }

  &:hover select {
    color: #ffffff;
    background-color: #1565C0;
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
  border-radius: 4px;
  border: 1px solid #939FA5;
  background-color: #f9f9f9;

  label:hover {
    background-color: #f1f1f1;
  }
`;

interface DropBoxProps {
  subject: string,
  options: string[],
  onChange: (selectedOptions: string[]) => void,
}

export default function DropBox({
  subject, options, onChange,
}: DropBoxProps) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions]);

  const handleFakeSelectorClick = (ev: React.MouseEvent<HTMLSelectElement>) => {
    ev.preventDefault();
  };

  const handleOptionChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.checked) {
      setSelectedOptions([...selectedOptions, ev.target.value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== ev.target.value));
    }
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
        onClick={handleFakeSelectorClick}
        onMouseDown={handleFakeSelectorClick}
      >
        <option>{subject}</option>
      </FakeSelector>
      <Options>
        {optionsElement}
      </Options>
    </MultipleSelectorContainer>
  );
}

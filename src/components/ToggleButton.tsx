import styled from "styled-components";

const ToggleButtonContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
  margin: 5px;
`;

const HiddenInput = styled.input`
  opacity: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #ffffff;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + & {
    background-color: #2196F3;
  }

  input:checked + &:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
  }
`;

interface ToggleButtonProps {
  isChecked: boolean,
  onToggle: (isChecked: boolean) => void,
}

export default function ToggleButton({ isChecked, onToggle }: ToggleButtonProps) {
  const handleClick = () => {
    onToggle(!isChecked);
  };

  return (
    <ToggleButtonContainer htmlFor="toggle" onClick={handleClick}>
      <HiddenInput name="toggle" type="checkbox" checked={isChecked} />
      <Slider />
    </ToggleButtonContainer>
  );
}

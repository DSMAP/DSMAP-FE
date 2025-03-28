import styled from "styled-components";

interface InputProps {
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({placeholder}) => {
  return (
    <InputWrapper>
      <input type="text" placeholder={placeholder}/>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  border-radius: 20px;
  border: 2px solid #BCBAF2;
  background-color: #ECECFB;
  width: 100%;
  height: 60px;
  align-items: center;
  display: flex;
  & > input{
    margin-left: 20px;
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    font-size: 16px;
    color: #333;
  }
`;

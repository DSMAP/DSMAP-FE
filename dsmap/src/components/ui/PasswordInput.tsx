import styled from "styled-components";

interface PasswordInputProps {
  placeholder: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({placeholder}) => {
  return (
    <InputWrapper>
      <input type="password" placeholder={placeholder}/>
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

import React from "react";
import styled from "styled-components";
import { Input } from "./ui/Input";
import { LoginButton } from "./ui/LoginButton";
import { PasswordInput } from "./ui/PasswordInput";

export const SignUpContainer: React.FC = () => {
  return (
    <>
      <ContainerWrapper>
        <TitleWrapper>
          회원가입
        </TitleWrapper>
        <InputWrapper>
          <Input placeholder="아이디를 입력해주세요"/>
          <PasswordInput placeholder="비밀번호를 입력해주세요"/>
          <PasswordInput placeholder="비밀번호를 재입력해주세요"/>
        </InputWrapper>
        <ButtonWrapper>
          <LoginButton text="회원가입" link=""/>
        </ButtonWrapper>
      </ContainerWrapper>
    </>
  );
};

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 20px;
  width: 75%;
  gap: 50px;
  background-color: #ffffff;
  
`;

const TitleWrapper = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
import React from "react";
import styled from "styled-components";
import { Input } from "./ui/Input";
import { LoginButton } from "./ui/LoginButton";
import { PasswordInput } from "./ui/PasswordInput";

export const LoginContainer: React.FC = () => {
  return (
    <>
      <ContainerWrapper>
        <TitleWrapper>
          로그인
        </TitleWrapper>
        <InputWrapper>
          <Input placeholder="아이디를 입력하세요."/>
          <PasswordInput placeholder="비밀번호를 입력하세요."/>
        </InputWrapper>
        <ButtonWrapper>
          <LoginButton text="로그인" link=""/>
        </ButtonWrapper>
      </ContainerWrapper>
    </>
  );
};

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
  width: 85%;
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
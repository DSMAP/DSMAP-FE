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
          <Input placeholder="아이디를 입력해주세요"/>
          <PasswordInput placeholder="비밀번호를 입력해주세요"/>
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
  padding: 15px 35px 30px 35px;
  border-radius: 20px;
  width: 75%;
  gap: 40px;
  background-color: #ffffff;
  
`;

const TitleWrapper = styled.div`
  font-size: 30px;
  font-weight: 900;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
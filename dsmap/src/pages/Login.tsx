import React from "react";
import styled from "styled-components";
import { LoginContainer } from "../components/LoginCotainer";
import { Logo } from "../components/Logo";
import { GoSignUp } from "../components/ui/GoSignUp";
import { ModalAlert } from "../components/ModalAlert";

export const Login: React.FC = () => {
  return (
    <LoginWrapper>
      <Logo/>
      <LoginContainer/>
      <GoSignUp title="만약 회원이 아니라면?" linkTitle="회원가입 하기" link="signup"/>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #8071E1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
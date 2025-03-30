import React from "react";
import styled from "styled-components";
import { SignUpContainer } from "../components/SignUpContainer";
import { Logo } from "../components/Logo";
import { GoSignUp } from "../components/ui/GoSignUp";


export const SignUp: React.FC = () => {
  return (
    <SignUpWrapper>
      <Logo/>
      <SignUpContainer/>
      <GoSignUp title="만약 계정이 있다면?" linkTitle="로그인 하기" link=""/>
    </SignUpWrapper>
  );
}

const SignUpWrapper = styled.div`
  width: 100vw;
  height: 120vh;
  background-color: #8071E1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
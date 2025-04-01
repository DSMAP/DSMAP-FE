import React from "react";
import styled from "styled-components";
import LoginLogo from "../assets/loginLogo.svg"
import { LoginContainer } from "../components/LoginCotainer";
import { GoSignUp } from "../components/ui/GoSignUp";


export const Login: React.FC = () => {
  return (
    <>
        <LoginWrapper>
          <img src={LoginLogo} width={150} height={100}></img>
          <LoginContainer/>
          <GoSignUp title="만약 회원이 아니라면?" linkTitle="회원가입 하기" link="signup"/>
        </LoginWrapper>
    </>
  );
}

const LoginWrapper = styled.div`
  width: 465px;
  height: 100vh;
  background-color: #8071E1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
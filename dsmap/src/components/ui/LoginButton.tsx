import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface LoginButtonProps {
  text: string; // 타입 지정
  link: string;
}

export const LoginButton: React.FC<LoginButtonProps> = ({text, link}) => {

  const navigate = useNavigate();

  const goLink = () => {
    navigate(`/${link}`);
  }

  return(
    <ButtonWrapper onClick={goLink}>
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  cursor: pointer;
  border-radius: 20px;
  background-color: #8071E1;
  width: 100%;
  height: 60px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;
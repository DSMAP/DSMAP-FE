import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface GoSignUpProps{
  title: string;
  linkTitle: string;
  link: string;
}

export const GoSignUp: React.FC<GoSignUpProps> = ({title, linkTitle, link}) => {
  const navigate = useNavigate();

  const goLink = () => {
    navigate(`/${link}`);
  }
  return (
    <GoWrapper>
      <TitleWrapper>
        {title} |
      </TitleWrapper>
      <LinkButton onClick={goLink}>
        {linkTitle}
      </LinkButton>
    </GoWrapper>
  );
}

const GoWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const TitleWrapper = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const LinkButton = styled.div`
  cursor: pointer;
  color: #CFD8F6;
  font-size: 15px;
  font-weight: bold;
`;
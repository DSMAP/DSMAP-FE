import styled from "styled-components";

interface ModalButtonProps {
  text: string; // 타입 지정
  onClick: () => void;  // 함수 타입으로 변경
}

export const ModalButton: React.FC<ModalButtonProps> = ({text, onClick}) => {

  return(
    <ButtonWrapper onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  cursor: pointer;
  border-radius: 10px;
  background-color: #5C41C0;
  width: 100%;
  height: 60px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;
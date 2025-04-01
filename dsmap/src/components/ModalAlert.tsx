import styled from "styled-components";
import { ModalButton } from "./ui/ModalButton";

interface ModalAlertProps {
  title: String;  // 여기가 내용 입력부분
  clickOverRay: boolean;  // 오버레이 부분을 눌러 끌껀지 말건지
  openModal: boolean; // 모달이 열리는 조건 부분
  closeModal: () => void; // 모달이 닫힐 함수 
}

export const ModalAlert: React.FC<ModalAlertProps> = ({title, clickOverRay, openModal, closeModal}) => {

  const overRay = () => {
    if(clickOverRay) {closeModal(false)};
  }
  
  const onclickClose = () => {
    closeModal(false);
  }

  return(
    (openModal) ? (
      <ModalOverRay onClick={overRay}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <TitleWrapper>
          {title}
        </TitleWrapper>
        <ButtonWrapper>
          <ModalButton text="확인" onClick={onclickClose}/>
        </ButtonWrapper>
      </ModalContainer>
    </ModalOverRay>
    ) : (
      null
    )
    
  );
};

const ModalOverRay = styled.div`
  z-index: 9000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;  
  height: 100vh;  
  background-color: rgba(61, 61, 61, 0.7);
`;

const ModalContainer = styled.div`
  z-index: 9001;
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 15px;
  padding: 50px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const TitleWrapper = styled.div`
  max-width: 100%;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

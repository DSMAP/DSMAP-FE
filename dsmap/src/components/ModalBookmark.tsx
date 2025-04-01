import styled from "styled-components";
import { ModalButton } from "./ui/ModalButton";

interface ModalBookmarkProps {
  title: String;
  clickOverRay: boolean;
  openModal: boolean;
  closeModal: () => void;
}

export const ModalBookmark: React.FC<ModalBookmarkProps> = ({title, clickOverRay, openModal, closeModal}) => {

  const overRay = () => {
    if(clickOverRay) {closeModal(false)};
  }

  return(
    (openModal) ? (
      <ModalOverRay onClick={overRay}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <TitleWrapper>
          {title}
        </TitleWrapper>
        <ButtonWrapper>
          <ModalButton text="북마크"/>
          <ModalButton text="알림"/>
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
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

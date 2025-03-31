import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars, FaBell, FaBus } from "react-icons/fa";
import HomeBtn from "../assets/homeBtn.svg";
import PeopleBtn from "../assets/peopleBtn.svg";
import BookMarkBtn from "../assets/bookmarkBtn.svg";
import { BusContainer } from "../components/BusContainer";

export const MainPage: React.FC = () => {
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButtons(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Header>
        <SearchContainer>
          <Searchdiv>
            <FaBars size={25} color="#4b5563" /> 
            <Input type="text" placeholder="노선 정보를 입력하세요" />
          </Searchdiv>
          <FaBus size={25} color="#4b5563" />
        </SearchContainer>
        <FaBellContainer>
          <FaBell size={30} color="#FFFFFF" />
        </FaBellContainer>
      </Header>
      <ContainerBox>
      <BusContainer />
      <BusContainer />
      </ContainerBox>
      <Nav>
        <img src={HomeBtn} alt="Home" width={25} height={25} />
        <img src={PeopleBtn} alt="People" width={25} height={25} />
        <img src={BookMarkBtn} alt="BookMark" width={25} height={25} />
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  display: flex;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.header`
  background-color: white;
  margin: 20px; 
  display: flex;
  align-items: center;
`;

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  width: 100%;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #DCDCF8;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  margin-right: 20px;
`;

const Searchdiv = styled.div`
  display: flex;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  margin: 0 10px;
  color: #000000;
  outline: none;
  font-size: 17px;
  font-family: "pretendard";
`;

const Nav = styled.nav`
  background: #6d28d9; 
  padding: 16px;
  display: flex;
  justify-content: space-around;
  color: white;
  margin-top: auto;
  height: 100%;
`;

const FaBellContainer = styled.div`
  padding: 16px;  // Adjusted padding
  background-color: #5C41C0;
  border-radius: 10px;
`;

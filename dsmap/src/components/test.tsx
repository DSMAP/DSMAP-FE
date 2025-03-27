import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars, FaBell, FaBus } from "react-icons/fa";

interface BusRoute {
  type: string;
  number: string;
  time: string;
  stops: string;
  color: string;
  urgent?: boolean;
}

const busRoutes: BusRoute[] = [
  { type: "일반", number: "514", time: "13분 47초", stops: "3정거장 전", color: "blue" },
  { type: "일반", number: "511", time: "13분 47초", stops: "3정거장 전", color: "blue", urgent: true },
  { type: "마을", number: "마을 1번", time: "13분 47초", stops: "3정거장 전", color: "skyblue" },
  { type: "급행", number: "급행 1", time: "13분 47초", stops: "3정거장 전", color: "red" },
  { type: "지선", number: "912", time: "13분 47초", stops: "3정거장 전", color: "green" },
  { type: "급행", number: "존시나", time: "13분 47초", stops: "3정거장 전", color: "red" },
  { type: "일반", number: "502", time: "12분 30초", stops: "2정거장 전", color: "blue" },
  { type: "광역", number: "M6724", time: "15분 20초", stops: "4정거장 전", color: "orange" },
  { type: "마을", number: "마을 3번", time: "9분 10초", stops: "1정거장 전", color: "skyblue" },
  
];

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

      <Main>
        <ScrollableContainer>
          <RouteContainer>
            {busRoutes.map((route, index) => (
              <RouteCard key={index}>
                <RouteInfo>
                  <Label color={route.color}>{route.type}</Label>
                  <BusNumber color={route.color}>{route.number}</BusNumber>
                </RouteInfo>
                <RouteDetails>
                  <TimeText urgent={route.urgent}>{route.time}</TimeText>
                  <StopInfo>{route.stops}</StopInfo>
                </RouteDetails>
              </RouteCard>
            ))}
          </RouteContainer>
        </ScrollableContainer>
            <Expend />
        
        <ScrollableContainer>
          <RouteContainer>
            {busRoutes.map((route, index) => (
              <RouteCard key={index}>
                <RouteInfo>
                  <Label color={route.color}>{route.type}</Label>
                  <BusNumber color={route.color}>{route.number}</BusNumber>
                </RouteInfo>
                <RouteDetails>
                  <TimeText urgent={route.urgent}>{route.time}</TimeText>
                  <StopInfo>{route.stops}</StopInfo>
                </RouteDetails> 
              </RouteCard>
            ))}
          </RouteContainer>
        </ScrollableContainer>
        <Expend />
      </Main>

      <Nav>
        <NavItem>🏠</NavItem>
        <NavItem>👤</NavItem>
        <NavItem>🔖</NavItem>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  height: 100vh;
  width: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.header`
  background-color: white;
  padding: 20px 20px 0px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #DCDCF8;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
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

const Main = styled.main`
  padding: 20px 20px 20px 20px;
  flex: 1;  // Main 요소가 부모 컨테이너에서 남은 공간을 모두 차지
  background-color: white;
  overflow: hidden;
`;


const ScrollableContainer = styled.div`
  height: 320px;
  overflow-y: auto;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #DCDCF8;
  padding: 20px 20px 20px 20px; 
  flex-grow: 1;
`;

const Expend = styled.div`
  background-color: #DCDCF8;
  width: 100%;
  height: 20px;
  position: relative;
  bottom: 20px;
  border-radius: 5px;
`

const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RouteCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 12px;  // Adjusted padding for a similar size
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RouteInfo = styled.div`
  display: flex;
  align-items: center;
`;

const BusNumber = styled.span<{ color: string }>`
  margin-left: 8px;  // Adjusted margin
  font-weight: bold;
  color: ${({ color }) => color};
`;

const RouteDetails = styled.div`
  text-align: right;
`;

const StopInfo = styled.span`
  font-size: 12px;  // Adjusted font size
  color: #6b7280;
`;

const Label = styled.span<{ color: string }>`
  background: ${({ color }) => color};
  color: white;
  font-size: 14px;  // Adjusted font size
  padding: 4px 8px;  // Adjusted padding
  border-radius: 4px;
`;

const TimeText = styled.span<{ urgent?: boolean }>`
  font-size: 14px;  // Adjusted font size
  color: ${({ urgent }) => (urgent ? "#dc2626" : "#4b5563")};
  font-weight: ${({ urgent }) => (urgent ? "bold" : "normal")};
`;

const Nav = styled.nav`
  background: #6d28d9;
  padding: 16px;
  display: flex;
  justify-content: space-around;
  color: white;
`;

const NavItem = styled.div`
  font-size: 24px;  // Adjusted font size
`;

const FaBellContainer = styled.div`
  padding: 16px;  // Adjusted padding
  background-color: #5C41C0;
  border-radius: 10px;
`;

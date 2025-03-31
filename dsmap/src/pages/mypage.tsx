import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeBtn from "../assets/homeBtn.svg";
import PeopleBtn from "../assets/peopleBtn.svg";
import BookMarkBtn from "../assets/bookmarkBtn.svg";
import ArrowBtn from "../assets/arrowBtn.svg";
import LogoImg from "../assets/logoImg.svg";

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

export const MyPage: React.FC = () => {
  const [isOption, setIsOption] = useState(false);
  const [content, setContent] = useState("시간순");
  const [sortedBuses, setSortedBuses] = useState<BusRoute[]>(() => { 
    // 로컬스토리지에서 정렬된 데이터가 있으면 가져오고, 없으면 초기 데이터를 시간순으로 정렬
    const storedData = localStorage.getItem("sortedBuses");
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return [...busRoutes].sort((a, b) => a.time.localeCompare(b.time));
    }
  });

  useEffect(() => {
    let sortedData = [...busRoutes];

    if (content === "시간순") {
      sortedData.sort((a, b) => a.time.localeCompare(b.time));
    } else if (content === "오름차순") {
      sortedData.sort((a, b) => a.number.localeCompare(b.number));
    } else if (content === "탑승순") {
      sortedData.sort((a, b) => b.number.localeCompare(a.number));
    }

    setSortedBuses(sortedData);
    // 로컬스토리지에 새로운 정렬된 데이터 저장
    localStorage.setItem("sortedBuses", JSON.stringify(sortedData));
  }, [content]);

  const selectClick = () => {
    setIsOption(!isOption);
  };

  const optionClick = (value: string) => {
    setIsOption(false);
    setContent(value);
  };

  return (
    <Container>
      <Header>
        <AroBtn src={ArrowBtn} width={25} height={25} alt="Back" />
        마이페이지
      </Header>

      <UserInfoContainer>
        <UserInfo>Rlacksdl104</UserInfo>
        <Logo src={LogoImg} alt="Logo" width={35} height={35} />
      </UserInfoContainer>

      <ContainerBox>
        <Title>최근 탑승한 버스</Title>
        <OrderListContainer>
          <SelectBtn isOpen={isOption} onClick={selectClick}>
            {content}
          </SelectBtn>
          {isOption && (
            <DropdownContainer>
              <ListContents onClick={() => optionClick("시간순")}>
                <OptionBtn>시간순</OptionBtn>
              </ListContents>
              <ListContents onClick={() => optionClick("오름차순")}>
                <OptionBtn>오름차순</OptionBtn>
              </ListContents>
              <LastListContents onClick={() => optionClick("탑승순")}>
                <LastOptionBtn>탑승순</LastOptionBtn>
              </LastListContents>
            </DropdownContainer>
          )}
        </OrderListContainer>

        <ScrollableContainer>
          <RouteContainer>
            {sortedBuses.map((bus) => (
              <RouteCard key={bus.number}>
                <RouteInfo>
                  <Label color={bus.color}>{bus.type}</Label>
                  <BusNumber color={bus.color}>{bus.number}</BusNumber>
                </RouteInfo>
                <RouteDetails>
                  <TimeText urgent={bus.urgent || false}>{bus.time}</TimeText>
                  <StopInfo>{bus.stops}</StopInfo>
                </RouteDetails>
              </RouteCard>
            ))}
          </RouteContainer>
        </ScrollableContainer>
      </ContainerBox>

      <Footer> 
        <Nav>
          <img src={HomeBtn} width={25} height={25} alt="Home" />
          <img src={PeopleBtn} width={25} height={25} alt="People" />
          <img src={BookMarkBtn} width={25} height={25} alt="BookMark" />
        </Nav>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  font-family: "pretendard";
  background-color: white;
  display: flex;
  height: 100vh;
  margin: 0;
  flex-direction: column;
  margin: 0;

  &::-webkit-scrollbar {
    display: none;
  }   

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const AroBtn = styled.img`
  margin-right: 10px;
`;

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  width: 100%;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.div`
  background-color: #dcdcf8;
  font-weight: 900;
  display: flex;
  justify-content: flex-start;
  width: 400px;
  font-size: 17px;
  padding: 20px 0px 15px 20px;
  position: relative;
  top: 55px;
  border-radius: 15px;
`;

const Header = styled.header`
  background-color: white;
  margin: 20px;
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 50px;
  flex-direction: row;
`;

const UserInfoContainer = styled.div`
  background: #dcdcf8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 420px;
  margin: auto;
  border-radius: 10px;
  height: 180px;
`;

const UserInfo = styled.div`
  margin-left: 20px;
  font-weight: 700;
`;

const Logo = styled.img`
  margin-right: 10px;
`;

const Nav = styled.nav`
  background: #6d28d9;
  padding: 16px;
  display: flex;
  justify-content: space-around;
  color: white;
  height: 30px;
`;

interface SelectBtnProps {
  isOpen: boolean;
}

const SelectBtn = styled.button<SelectBtnProps>`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${({ isOpen }) => (isOpen ? "0" : "5px")};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background-color: #6d53d4;
`;

const OptionBtn = styled.button`
  width: 50%;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  background-color: #6d53d4;
  color: white;
`;

const LastOptionBtn = styled.button`
  width: 50%;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  border-bottom-left-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
  color: white;
  background-color: #6d53d4;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
`;

const ListContents = styled.li`
  width: 100%;
  display: flex;
  position: relative;
`;

const LastListContents = styled(ListContents)`
  &::after {
    display: none;
  }
`;

const OrderListContainer = styled.div`
  width: 130px;
  position: relative;
  top: 10px;
  left: 190px;
`;

const ScrollableContainer = styled.div`
  width: 380px;
  height: 300px;
  overflow-y: auto;
  border-radius: 10px;
  background: #dcdcf8;
  padding: 20px;
  margin: 0px 10px 0px 10px;
`;

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
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RouteInfo = styled.div`
  display: flex;
  align-items: center;
`;

const BusNumber = styled.span<{ color: string }>`
  margin-left: 8px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const RouteDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StopInfo = styled.span`
  font-size: 12px;
  color: #6b7280;
  margin-top: 4px;
`;

const Label = styled.span<{ color: string }>`
  background: ${({ color }) => color};
  color: white;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
`;

const TimeText = styled.span<{ urgent?: boolean }>`
  font-size: 14px;
  color: ${({ urgent }) => (urgent ? "#dc2626" : "#4b5563")};
  font-weight: ${({ urgent }) => (urgent ? "bold" : "normal")};
`;

export default MyPage;

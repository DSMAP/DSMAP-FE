import React from "react";
import styled from "styled-components";

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
  { type: "일반", number: "50`2", time: "12분 30초", stops: "2정거장 전", color: "blue" },
  { type: "광역", number: "M6724", time: "15분 20초", stops: "4정거장 전", color: "orange" },
  { type: "마을", number: "마을 3번", time: "9분 10초", stops: "1정거장 전", color: "skyblue" },
];

export const BusContainer: React.FC = () => {
  return (
    <>
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
      </Main>
    </>
  );
}

const Main = styled.main`
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  `;  

const ScrollableContainer = styled.div`
  width: 380px;
  height: 300px;
  overflow-y: auto;
  border-radius: 10px;
  background: #DCDCF8;
  padding: 20px; 
  margin: 0px 10px 0px 10px;
`;

const Expend = styled.div`
  background-color: #DCDCF8;
  width: 95.5%;
  height: 25px;
  position: relative;
  bottom: 20px;
  border-radius: 10px;
  left: 10px;
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
  padding: 8px;  // Adjusted padding for a similar size
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
  font-size: 14px;  // Adjusted font size
  padding: 4px 8px;  // Adjusted padding
  border-radius: 4px;
`;

const TimeText = styled.span<{ urgent?: boolean }>`
  font-size: 14px;  // Adjusted font size
  color: ${({ urgent }) => (urgent ? "#dc2626" : "#4b5563")};
  font-weight: ${({ urgent }) => (urgent ? "bold" : "normal")};
`;
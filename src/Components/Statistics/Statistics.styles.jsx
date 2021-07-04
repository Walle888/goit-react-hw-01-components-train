import styled from "@emotion/styled";

export const Card = styled.section`
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 20px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 100px;
  background-color: lavender;

  text-transform: uppercase;
`;

export const StatList = styled.ul`
 display: flex;
  justify-content: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto; 
`;

export const StatItem = styled.li`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 100px;
`;

export const StatLabel = styled.span`
/* color: white; */
  margin-bottom: 20px;
`;

export const StatPercentage = styled.span`
/* color: white; */
  font-size: 24px;
  font-weight: 700;
`;

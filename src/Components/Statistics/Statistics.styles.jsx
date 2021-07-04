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
 margin-bottom: 50px;
    padding: 10px 0;
    border-top: 2px solid #dcdcdc;
    border-bottom: 2px solid #dcdcdc;
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    color: #696969;
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

import styled from '@emotion/styled';

export const Card = styled.div`
    margin-bottom: 50px;
    width: 280px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px rgb(0 0 0 / 50%);
    overflow: hidden;
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

export const Descriptions = styled.div`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const Image = styled.img`
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border-radius: 50%;
`;

export const Name = styled.p`
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const Tag = styled.p`
    margin-bottom: 10px;
    font-size: 14px;
    color: #696969;
`;

export const Location = styled.p`
    font-size: 16px;
    color: #696969;
`;

export const StatsList = styled.ul`
display: flex;
border-top: 1px solid #d3d3d3;
padding-left: 0;
margin: 0;
list-style: none;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
padding-top: 20px;
padding-bottom: 20px;
width: 100%;
align-items: center;

&:not(:last-child) {
    border-right: 1px solid #d3d3d3;
}
`;

export const StatsLabel = styled.span`
margin-bottom: 5px;
color: #696969;
`;

export const StatsQuality = styled.span`
font-weight: 700;
`;



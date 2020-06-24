import styled from "styled-components";

export const EndTest = styled.div`
  width: 500px;
  height: 250px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;

  p{
    text-align: center;
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  color: #f7aa41;
  font-size: 25px;
  text-align: center;
`;

export const Message = styled.span`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

export const Detail = styled.a`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #f7aa41;
  color: #fff;
  font-size: 25px;
  text-align: center;
  font-family: 'Bebas', sans-serif;
  border-radius: 8px;
  text-decoration: none;
`;
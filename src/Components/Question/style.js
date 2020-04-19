import styled from "styled-components";

export const Wrap = styled.div`
  width: 700px;
  height: 400px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 4px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const AnswerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Answer = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 14px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: ${props => props.active ? '#5CB85C' : '#2751e8'};
  cursor: pointer;
  box-sizing: border-box;
  transition: all .3s ease-in-out;
  :hover {
    transform: scale(1.03);
  }
 
  p {
    margin: 0;
    color: #fff;
  }
`;

export const BtnRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const NextBtn = styled.button`
  width: 200px;
  padding-bottom: 0;
  line-height: 32px;
  font-family: 'Bebas', sans-serif;
  font-size: 16px;
  color: #fff;
  background-color: #f7aa41;
  border: none;
  outline: none;
  cursor: pointer;
`;


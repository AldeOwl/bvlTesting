import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 800px;
  min-width: 250px;
  width: 100%;
  min-height: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  margin: 16px;
  font-size: 18px;
  @media(max-width: 500px) {
    font-size: 16px;
  }
`;

export const TextTitle = styled.h1`
  margin: 16px;
  font-size: 25px;
  @media(max-width: 500px) {
    font-size: 20px;
  }
`;

export const BtnRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media(max-width: 500px) {
    justify-content: center;
  }
`;

export const NextBtn = styled.button`
  min-width: 225px;
  margin-top: 15px;
  padding-bottom: 0;
  line-height: 40px;
  font-family: 'Bebas', sans-serif;
  font-size: 18px;
  color: #fff;
  background-color: #f7aa41;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: all .2s linear;
  :hover {
     background-color: #b37017;
  }
`;


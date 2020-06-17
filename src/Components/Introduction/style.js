import styled from "styled-components";

export const Wrap = styled.div`
  width: 800px;
  min-height: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  margin: 16px;
  font-size: 18px;
`;

export const TextTitle = styled.h1`
  margin: 16px;
  font-size: 25px;
`;

export const BtnRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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


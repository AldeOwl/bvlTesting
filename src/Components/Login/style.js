import styled from "styled-components";

export const Wrap = styled.div`
  min-height: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
`;

export const RowInputWrap = styled.div`
  width: 288px;
  height: 70px;
  position: relative;
  display: flex;
  flex-direction: column;

  :last-of-type {
    margin: 0;
  }
  @media (max-width: 600px) {
    margin-right:0;
    width:100%;
  }
  
  span {
    position: absolute;
    top: 50px;
    left: 0;
    color: ${props => props.theme.error};
    font-size: 12px;
  }  
`;

export const InputLabel = styled.label`
  padding: 3px 4px;
  line-height: 0;
  position: absolute;
  top: 22px;
  left: 12px;
  font-size: 14px;
  color: #d6d6d6;
  transition: all .2s linear;
`;

export const Input = styled.input`
  width: 288px;
  height: 44px;
  padding: 12px;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
    &:focus {
      border-color: #0065B3;
    }
    &:focus ~ label {
      color: #0065B3;
      top: -1px;
      background: linear-gradient(180deg, rgba(250,250,250,1) 50%, rgba(255,255,255,1) 100%);
      font-size: 12px;
    }
    & ~ label {
    ${props => props.value && `{
      color: #d6d6d6;
      top: -1px;
      background: linear-gradient(180deg, rgba(250,250,250,1) 50%, rgba(255,255,255,1) 100%);
      font-size: 12px;
      }`
  }}
`;
export const LoginBtn = styled.button`
    width: 288px;
    height: 44px;
    color: #fff;
    font-size: 20px;
    font-family: 'Bebas', sans-serif; 
    border-radius: 3px;
    background: #f7aa41;
    cursor: pointer;
    outline: none;
    border: none;
    transition: background-color .2s linear;
    :hover {
        background-color: #ad8652;
    }
    @media (max-width: 500px){
        width: 100%;
    }
`;

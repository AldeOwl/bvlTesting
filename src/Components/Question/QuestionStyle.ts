import styled from 'styled-components'

export const Wrap = styled.div`
  max-width: 700px;
  min-width: 250px;
  min-height: 400px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 4px;
`

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.p`
  max-width: 90%;
  margin: 0 0 10px 0;
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`

export const AnswerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Answer = styled.div<{active: boolean}>`
  width: 100%;
  min-height: 40px;
  margin-bottom: 14px;
  padding: 5px 16px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active ? '#5CB85C' : '#2751e8')};
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.03);
  }

  p {
    margin: 0;
    color: #fff;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`

export const BtnRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 500px) {
    justify-content: center;
  }
`

export const NextBtn = styled.button`
  width: 225px;
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
  transition: all 0.2s linear;
  :hover {
    background-color: #b37017;
  }
`

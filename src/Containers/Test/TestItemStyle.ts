import styled from 'styled-components'

export const EndTest = styled.div`
  max-width: 500px;
  min-width: 250px;
  min-height: 250px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;

  p {
    text-align: center;
    font-weight: bold;
    span {
      font-family: Nova;
      color: #f7aa41;
      font-size: 25px;
    }
  }
`

export const Title = styled.h1`
  color: #f7aa41;
  font-size: 25px;
  text-align: center;
`

export const SaveButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #f7aa41;
  color: #fff;
  font-size: 25px;
  text-align: center;
  font-family: 'Bebas', sans-serif;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

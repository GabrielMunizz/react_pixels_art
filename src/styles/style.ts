import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;  
  color: #000;
  font-size: 40px;
  font-family: 'Moirai One', cursive;
  height: 100px;
  margin-bottom: 20px;
`

export const ColorsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: translateX(15%);
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Kodchasan', sans-serif;
  width: 100%;  
`
export const InputContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  & input {
    border-radius: 5px;
    border: none;
    margin: 5px;
    font-size: 20px;
    padding-right: 5px;
    text-align: right;
  }

  & label {
    font-size: 20px;
  }  
`

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;  
`
export const Pixel = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #000;
  background-color: #fff;
`

export const PickColor = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  margin-left: 15%;  

  & div {
    border-radius: 50%;
    margin: 10px;

    &:hover {
      cursor: pointer;
    }
  } 
`
export const Button = styled.button`
  min-width: 60px;
  min-height: 23px;
  transition: 0.3s ease;
  background-color: #0460ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 1px 1px 8px  #000;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
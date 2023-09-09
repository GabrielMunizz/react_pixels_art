import * as S from '../styles/style';
import React, { useState } from 'react';
import Line from './Line';
import PickColor from './PickColor';
import Swal from 'sweetalert2'
import uuid from 'react-uuid';

const Board = () => {
  const [length, setLength] = useState<string>('5');
  const [inputValue, setInputValue] = useState<string>('');  
  const convertedLength = Number(length);  

  const column = [];
  while(column.length < convertedLength) {
    column.push(<Line key={ uuid() } length={length} />);
  }

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {    
    setInputValue(target.value);
  }

  const handleClick = () => {    
    setLength(inputValue);
    if (inputValue === '' || inputValue > '20') {
      setLength('5');
      Swal.fire('Please, insert a number between 5 and 20.');
    } 
    setInputValue('');    
  }
  return(
    <S.Main>      
      <S.InputContainer>
        <label htmlFor="pixelLength">
          How many pixels?
          <input type="text" id='pixelLength' value={inputValue} onChange={handleChange}/>
        </label>
        <S.Button onClick={handleClick}>Go!</S.Button>
      </S.InputContainer>
      <S.ColorsContainer>
        <S.Board>
          {column}
        </S.Board>
        <PickColor />
      </S.ColorsContainer>
    </S.Main>
  )
}

export default Board;
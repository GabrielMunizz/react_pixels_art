import { useContext } from 'react';
import BGColorContext from '../context/BGColorContext';
import * as S from '../styles/style';
import Pixel from './Pixel';
import uuid from 'react-uuid';

type LineProps = {
  length: string;
}

const Line = ({length}: LineProps) => {
  const bgContext = useContext(BGColorContext);
  const { board } = bgContext
  const convertedLength = Number(length); 

  const pixels = []  
  while(pixels.length < convertedLength) {
    pixels.push(<Pixel key={ uuid() } id={ uuid() }/>);    
  }
  
  return(
    <S.Line>
      {pixels}
    </S.Line>
  )
}

export default Line;
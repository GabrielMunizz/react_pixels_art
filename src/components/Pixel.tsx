import { useState, useContext } from 'react';
import BGColorContext from '../context/BGColorContext';
import * as S from '../styles/style';

const Pixel = () => { 
  const bgContext = useContext(BGColorContext);
  const { backgroundColor } = bgContext;
  const [color, setColor] = useState('#fff');
  const id = Math.floor(Math.random() * 400 + 2);

  const handleBg = (thisId: number) => {
    thisId === id ? setColor(backgroundColor) : false;
  }

  return(
    <S.Pixel style={{ backgroundColor: color }} onClick={ () => handleBg(id) } ></S.Pixel>
  )
}

export default Pixel;
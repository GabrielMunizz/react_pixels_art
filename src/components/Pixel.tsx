import { useContext } from 'react';
import BGColorContext from '../context/BGColorContext';
import * as S from '../styles/style';
import { useState } from 'react';


type PixelProps = {
  id: string,
}

const Pixel = ({ id }: PixelProps) => {
  const [ color, setColor ] = useState('#fff');
  const bgContext = useContext(BGColorContext);
  const { backgroundColor } = bgContext;

  const handleBG = (thisPixelId: string) => {
    thisPixelId === id ? setColor(backgroundColor) : false;
  }

  return(
    <S.Pixel style={{ backgroundColor: color }} onClick={ () => handleBG(id) }></S.Pixel>
  )
}

export default Pixel;
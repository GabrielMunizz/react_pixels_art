import { useContext } from 'react';
import BGColorContext from '../context/BGColorContext';
import * as S from '../styles/style';


type AsidePixelProp = {
  id: string,
  color: string,  
}

const AsidePixel = ({ color }: AsidePixelProp) => {
  const bgContext = useContext(BGColorContext);
  const { handleSelectedColor } = bgContext;

  return(
    <S.AsidePixel style={{ backgroundColor: color }} onClick={ () => handleSelectedColor(color) }></S.AsidePixel>
  )
}

export default AsidePixel;
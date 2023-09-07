import * as S from '../styles/style';
import Pixel from './Pixel';

type LineProps = {
  length: string;
}

const Line = ({length}: LineProps) => {
  const convertedLength = Number(length);
  const color = '#fff'

  const pixels = []  
  while(pixels.length < convertedLength) {
    pixels.push(<Pixel color={ color } />);    
  }
  return(
    <S.Line>
      {pixels}
    </S.Line>
  )
}

export default Line;
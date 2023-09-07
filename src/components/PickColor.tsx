import Pixel from './Pixel';
import * as S from '../styles/style';
import { useState } from 'react';
import { randomColors } from '../utils/functions';

const PickColor = () => {  
  const initialColors = ['#000'];
  const i = 3
  
  const [colors, setColors] = useState<string[]>(initialColors);
  while (colors.length <= i) {
    colors.push(randomColors());
  } 

  const handleCLick = () => {
    const newColors = initialColors
    while (newColors.length <= i) {
      newColors.push(randomColors());
    }
    setColors(newColors);
  }
  return(
    <S.PickColor>
      {colors.map((color, index) => <Pixel key={index} color={ color } />)}
      <S.Button onClick={ handleCLick }>Random Colors!</S.Button>
    </S.PickColor>
  )
}

export default PickColor;
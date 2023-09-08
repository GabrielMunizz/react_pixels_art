import * as S from '../styles/style';

type PixelProps = {
  id: string,
  color: string,
}

const Pixel = ({ color }: PixelProps) => {
  return(
    <S.Pixel style={{ backgroundColor: color }}></S.Pixel>
  )
}

export default Pixel;
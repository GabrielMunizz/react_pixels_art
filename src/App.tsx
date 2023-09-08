import Board from './components/Board';
import * as S from './styles/style';
import { GlobalStyle } from './styles/globalStyle';
import { useState } from 'react';
import BGColorContext from './context/BGColorContext';

function App() {
  const [selectedColor, setSelectedColor] = useState('');

  // função para selecionar a cor e colocar no contexto global
  const handleSelectedColor = (color: string) => {
    if (selectedColor !== '') {
      setSelectedColor('');
    }
    setSelectedColor(color);
  }

  console.log(selectedColor);
  return (
    <>  
       <BGColorContext.Provider value={ { backgroundColor: selectedColor, handleSelectedColor } }>
        <GlobalStyle />
        <S.Header>
          <h1>Pixels ART</h1>
        </S.Header>      
        <Board />
       </BGColorContext.Provider>
    </>
  )
}

export default App

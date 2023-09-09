import Board from './components/Board';
import * as S from './styles/style';
import { GlobalStyle } from './styles/globalStyle';
import { useState } from 'react';
import BGColorContext from './context/BGColorContext';

function App() {
  const [selectedColor, setSelectedColor] = useState('#000'); 

  const handleSelectedColor = (color: string) => {
    if (selectedColor !== '') {
      setSelectedColor('#000');
    }
    setSelectedColor(color);
  }  
  return (
    <>  
       <BGColorContext.Provider value={ { backgroundColor: selectedColor, handleSelectedColor, board: [] } }>
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

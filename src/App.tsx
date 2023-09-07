import Board from './components/Board';
import * as S from './styles/style';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <>
       <GlobalStyle />
       <S.Header>
        <h1>Pixels ART</h1>
      </S.Header>      
      <Board />  
    </>
  )
}

export default App

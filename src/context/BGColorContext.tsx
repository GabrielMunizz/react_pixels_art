import { createContext } from 'react';

type BGColorType = {
  backgroundColor: string,
  handleSelectedColor: (color: string) => void,  
  board: {
    id: number,
    backgroundColor: string
  }[],  
};

const BGColorContext = createContext({} as BGColorType);

export default BGColorContext;
import { createContext } from 'react';

type BGColorType = {
  backgroundColor: string,
  handleSelectedColor: (color: string) => void,
};

const BGColorContext = createContext({} as BGColorType);

export default BGColorContext;
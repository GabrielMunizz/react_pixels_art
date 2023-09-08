import { createContext } from 'react';

type BGColorType = {
  backgroundColor: string,
};

const BGColorContext = createContext({} as BGColorType);

export default BGColorContext;
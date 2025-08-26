import { createContext, useContext } from 'react';

export const FirstRenderContext = createContext(false);
export const useFirstRender = () => useContext(FirstRenderContext);

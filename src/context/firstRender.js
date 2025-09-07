import { createContext, useContext } from 'react';

/**
 * FirstRenderContext
 *
 * Contexto que provee la ref booleana del primer render lógico.
 */
export const FirstRenderContext = createContext(false);

/**
 * useFirstRender
 *
 * Hook que consume FirstRenderContext.
 *
 * @returns {React.RefObject<boolean>}
 */
export const useFirstRender = () => useContext(FirstRenderContext);

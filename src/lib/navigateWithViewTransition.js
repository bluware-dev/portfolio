/**
 * navigateWithViewTransition
 *
 * Envuelve la navegación con startViewTransition si está disponible.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition
 *
 * @param {Function} navigate - Función de navegación (react-router).
 * @param {string} to - Ruta destino.
 * @param {Object} opts - Opciones de navegación.
 * @returns {void}
 */
export function navigateWithViewTransition(navigate, to, opts) {
	if (
		typeof document !== 'undefined' &&
		typeof document.startViewTransition === 'function'
	) {
		// startViewTransition envuelve la actualización del DOM
		// y permite que el browser haga el animation pairing.
		// El callback ejecuta la navegación.
		document.startViewTransition(() => {
			navigate(to, opts);
		});
		return;
	}
	// fallback simple: navegar normalmente
	navigate(to, opts);
}

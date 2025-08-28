// https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition
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

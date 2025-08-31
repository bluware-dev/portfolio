import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';
import '@/styles/index.css';

const Root = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

createRoot(document.getElementById('root')).render(
	import.meta.env.DEV ? <StrictMode>{Root}</StrictMode> : Root
);

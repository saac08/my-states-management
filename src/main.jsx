import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import AppRouter from './router/AppRouter.jsx';
import Header from './Components/Header/Header.jsx';
import AppProvider from './contexts/AppProvider.context.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppProvider>
			<BrowserRouter>
				<div className='container w-[1800] m-auto flex flex-col gap-6 px-6 md:px-3'>
					<Header />
					<AppRouter />
				</div>
			</BrowserRouter>
		</AppProvider>
	</StrictMode>
);

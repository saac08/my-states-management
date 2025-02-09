import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
//Crear variables que establezcan el estado de carga lazy
const App = lazy(() => import('../App'));
const NotFoundPage = lazy(() => import('../pages/Error/NotFoundPage'));
const BlogPage = lazy(() => import('../pages/Blog/BlogPage'));
const SettingsPage = lazy(() => import('../pages/Settings/SettingsPage'));
const PostPage = lazy(() => import('../pages/Blog/PostPage'));

const AppRouter = () => {
	return (
		<Suspense>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/blog' element={<BlogPage />} />
				<Route path='/settings' element={<SettingsPage />} />
				<Route path='*' element={<NotFoundPage />} />

				{/* Rutas dinámicas */}
				<Route path='/blog/:id' element={<PostPage />} />
			</Routes>
		</Suspense>
	);
};

export default AppRouter;

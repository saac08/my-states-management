import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogCard from './components/BlogCard';

const BlogPage = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const getPosts = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts/'
			);
			setPosts(response.data);
			setError(null);
		} catch (err) {
			if (err.response) {
				setError(`Error ${err.response.status} : ${err.message}`);
			} else if (err.request) {
				setError('No se recibió respuesta del servidor');
			} else {
				// Errores en la configuración de la petición
				setError(`Error desconocido: ${err.message}`);
			}
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className='flex flex-col gap-6'>
			<h3 className='text-neutral-300 text-4xl font-medium '>Blog Posts</h3>
			<p className='text-neutral-400'>
				Aquí se tiene como práctica el poder hacer un fetch de datos y manejar
				sus posibles errores con Axios y el bloque try-catch.
			</p>
			{isLoading && <p>Cargando información</p>}
			{error && <p className='text-red-600'>{error}</p>}
			{!isLoading && !error && posts.length === 0 && (
				<p>No hay posts disponibles.</p>
			)}
			<div className='gap-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
				{posts.map((post) => (
					<BlogCard key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default BlogPage;

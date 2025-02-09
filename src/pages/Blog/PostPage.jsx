import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router';

const PostPage = () => {
	//Uso del parametro que estamos enviando
	const { id } = useParams();
	// Seteamos un estado para nuestro post
	const [post, setPost] = useState(null);
	// Seteamos un estado para validar si está cargando o no
	const [loading, setLoading] = useState(true);

	const getPost = async (id) => {
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			);
			setPost(response.data);
		} catch (error) {
			console.log('Error fetching post' + error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (id) {
			getPost(id);
		}
	}, [id]);

	if (loading) {
		return <h2>Cargando...</h2>;
	}

	if (!post) {
		return <Navigate to={'/error'} />;
	}

	return (
		<div className='flex flex-col gap-7'>
			<h2 className='text-3xl text-neutral-200 font-medium'>{post.title}</h2>
			<p className='text-base text-neutral-300'>{post.body}</p>
		</div>
	);
};

export default PostPage;

import PropTypes from 'prop-types';
import { Link } from 'react-router';

const BlogCard = ({ post }) => {
	console.log('Post rendered');

	const { id, title, body } = post;
	return (
		<Link
			to={`/blog/${id}`}
			className='bg-neutral-800 flex flex-col gap-2 px-3 py-6 rounded-xl transition-all hover:bg-neutral-700'
		>
			<h3 className='text-neutral-300 text-lg font-semibold'>{title}</h3>
			<p className='text-neutral-400 text-pretty'>{body}</p>
		</Link>
	);
};

BlogCard.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	}).isRequired,
};

export default BlogCard;

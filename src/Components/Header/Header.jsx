import { Link } from 'react-router';

const Header = () => {
	return (
		<header className='bg-neutral-800 px-4 py-2 rounded-xl w-fit m-auto mt-10'>
			<nav className='flex gap-2'>
				<Link
					className='text-lg px-2 py-1 rounded-md transition-all hover:bg-neutral-700'
					to={'/'}
				>
					Home
				</Link>
				<Link
					className='text-lg px-2 py-1 rounded-md transition-all hover:bg-neutral-700'
					to={'/blog'}
				>
					Blog
				</Link>
				<Link
					className='text-lg px-2 py-1 rounded-md transition-all hover:bg-neutral-700'
					to={'/settings'}
				>
					Settings
				</Link>
			</nav>
		</header>
	);
};

export default Header;

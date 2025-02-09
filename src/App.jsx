import { useContext } from 'react';
import { UserContext } from './contexts/user.context';

function App() {
	const { user, setUser } = useContext(UserContext);

	const UserData = {
		name: 'Cesar',
		email: 'cesar.silva@correo.com',
		isAdmin: true,
	};

	const isUserExists = user.name != null;

	return (
		<div className='flex flex-col gap-7'>
			<h1 className='text-2xl'>
				Bienvenido a mi página de aprendizaje y pruebas
			</h1>

			{isUserExists ? (
				<>
					<h1 className='text-2xl'>Bienvenido {user && user.name}</h1>
					<button
						className='cursor-pointer text-neutral-200 bg-neutral-800 w-fit px-3.5 py-2.5 rounded-lg border transition-all border-neutral-600 hover:bg-neutral-600'
						onClick={() => setUser({})}
					>
						Cerrar sesión
					</button>
				</>
			) : (
				<>
					<h1 className='text-2xl'>Por favor inicia sesión para continuar</h1>
					<button
						className='cursor-pointer text-neutral-200 bg-neutral-800 w-fit px-3.5 py-2.5 rounded-lg border transition-all border-neutral-600 hover:bg-neutral-600'
						onClick={() => setUser(UserData)}
					>
						Iniciar sesión
					</button>
				</>
			)}
		</div>
	);
}

export default App;

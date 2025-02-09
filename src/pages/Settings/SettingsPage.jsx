import { useContext } from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../../contexts/user.context';

const SettingsPage = () => {
	const { user } = useContext(UserContext);

	if (!user.name) return <Navigate to={'/error'} />;

	return (
		<div>
			<h1>
				Bienvenido {user.name && <span>{user.name}</span>} a mi Página protegida
			</h1>
		</div>
	);
};

export default SettingsPage;

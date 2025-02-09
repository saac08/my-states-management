import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

function UserProviderWrapper(props) {
	const [user, setUser] = useState({});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{props.children}
		</UserContext.Provider>
	);
}
UserProviderWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export { UserContext, UserProviderWrapper };

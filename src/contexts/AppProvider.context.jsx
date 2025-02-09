import PropTypes from 'prop-types';
import { UserProviderWrapper } from './user.context';

const AppProvider = ({ children }) => {
	return <UserProviderWrapper>{children}</UserProviderWrapper>;
};

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppProvider;

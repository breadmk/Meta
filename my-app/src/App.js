import { Route } from 'react-router-dom';
import Footer from './components/Foorter';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

/* 
	styled-components
	터미널- npm install --save styled-components
	웹 - https://styled-components.com/
	
*/

function App() {
	return (
		<div>
			<Header />
			<Route path='/' exact={true} component={HomePage} />
			<Route path='/login/:id' exact={true} component={LoginPage} />
			<Footer />
		</div>
	);
}

export default App;

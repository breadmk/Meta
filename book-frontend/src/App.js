import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Detail from './pages/book/Detail';
import Home from './pages/book/Home';
import SaveForm from './pages/book/SaveForm';
import UpdateForm from './pages/book/UpdateForm';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';

function App() {
	return (
		<div>
			<Header />
			<Container>
				<Route path='/' exact={true} component={Home} /> {/* 책 리스트를 보는 페이지 */}
				<Route path='/saveForm' exact={true} component={SaveForm} /> {/* 책 등록 페이지 */}
				<Route path='/book/:id' exact={true} component={Detail} /> {/* 책 상세 페이지 */}
				<Route path='/loginForm' exact={true} component={LoginForm} /> {/* 로그인 */}
				<Route path='/joinForm' exact={true} component={JoinForm} /> {/* 가입 */}
				<Route path='/updateForm/:id' exact={true} component={UpdateForm} /> {/* 책 수정 페이지 */}
			</Container>
		</div>
	);
}

export default App;

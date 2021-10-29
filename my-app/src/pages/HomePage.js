import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Footer from '../components/Foorter';
import Header from '../components/Header';
import Home from '../components/home/Home';

const HomePage = () => {
	/* http 요청(fetch,axios(다운)) */

	const [ boards, setBoards ] = useState([]);
	const [ number, setNumber ] = useState(0);
	const [ user, setUser ] = useState({});
	// 빈 배열 한번만 실행
	useEffect(() => {
		// 다운로드 가정 = fetch(),axios(),ajax()
		let data = [
			{ id: 1, title: '제목1', content: '내용1' },
			{ id: 2, title: '제목2', content: '내용2' },
			{ id: 3, title: '제목3', content: '내용3' }
		];

		// 빈 데이터가 들어감..다운로드 하기전에 실행되기 때문에...그렇기 때문에, 상태데이터값을 넣어야 재랜더링이 되어서 데이터가 들어감.
		// ※주의
		// 꼭 상태데이터로 넣어줘야함. 단순하게 let test = ; 로 선언하면 재랜더링이 안 되기 때문에 들어가지 않음.
		setBoards([ ...data ]);
		setUser({ id: 1, username: 'ssar' });
	}, []);

	return (
		<div>
			<Header />
			<Home boards={boards} id={1} setBoards={setBoards} number={number} setNumber={setNumber} user={user} />
			<Footer />
		</div>
	);
};

export default HomePage;

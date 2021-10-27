import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [ data, setData ] = useState(0);

	const [ serch, setSerch ] = useState(0);

	const download = () => {
		//다운로드 받고(통신)
		let downloadData = 5; //가정
		setData(downloadData);
	};

	/* useEffect 실행시점
	- (1) App() 함수가 최초 실행될 때 ( App() 그림이 그려질 때 )
	- (2) 상태 변수가 변경될 때 ( 그게 dependencyList에 등록되어 있어야함)
	- (3) 의존리스트로 관리를 할 수 있다.
	*/
	useEffect(
		() => {
			console.log('useEffect 실행됨');
			download();
		},
		[ serch ]
	); //두번째 인자 dependency (list) 비워두면 어디에도 의존하지 않음. 최초실행후 작동X

	return (
		<div>
			<button
				onClick={() => {
					setSerch(2);
				}}
			>
				검색하기
			</button>
			<h1>데이터 : {data} </h1>
			<button
				onClick={() => {
					setData(data + 1);
				}}
			>
				더하기
			</button>
		</div>
	);
}

export default App;

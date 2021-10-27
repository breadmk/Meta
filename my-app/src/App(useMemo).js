import { useMemo } from 'react';
import { useState } from 'react';
import './App.css';

/* 
	useMemo => 메모라이제이션(기억)
*/
function App() {
	const [ list, setList ] = useState([ 1, 2, 3, 4 ]);
	const [ str, setStr ] = useState('합계');

	const getAddResult = () => {
		let sum = 0;
		list.forEach((i) => (sum = sum + i));
		console.log('sum함수 실행됨 : ', sum);
		return sum;
	};

	const addResult = useMemo(() => getAddResult(), [ list ]);

	return (
		<div>
			<button
				onClick={() => {
					setStr([ '안녕' ]);
				}}
			>
				문자 변경
			</button>
			<button
				onClick={() => {
					setList([ ...list, 10 ]);
				}}
			>
				리스트값 추가
			</button>
			<div>{list.map((i) => <h1>{i}</h1>)}</div>
			<div>
				{str} : {addResult}
			</div>
		</div>
	);
}

export default App;

import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Sub from './Sub';
import Third from './Third';
import { numThird } from './Third';

//0. React 엔진 - 데이터변경감지에서 UI그려주는 !!
//1. 실행방식
//2. JSX 문법 (index.html) -SPA (Single Page App)  (a 태그 같은거 안됨)

/*
(1) return 시에 하나의 Dom만 리턴할 수 있다.
(2) 변수선언은 let 혹은 const로만 해야함.
(3) if문 사용 불가능X -> 삼항연산자  { && 문법은 false가 없음. true만 보여줌 }
(4) 조건부 렌더링 (조건 && 값(true))
(5) css디자인
    - 내부에 적는 방법
    - 외부 파일에 적는 방법
    - 라이브러리 사용 (부트스트랩,component-style)
*/
let a = 10; //변수
const b = 20; //상수

function App() {
	let c; // 값은 있는데 정의되지 않음  (undefined)
	let d = undefined;
	const mystyle = {
		color: 'red'
	};

	let list = [ 1, 2, 3 ];

	/* useState */
	const [ number, setNumber ] = useState(1); //React안에 hocks 라이브러리 상태값이 됨.
	const add = () => {
		setNumber(number + 1); //리액트한테 number 값 변경할게 라고 요청
		console.log('add', number);
	};
	/* */

	/* */

	let sample = [ { id: 1, name: '홍길동' }, { id: 2, name: '임꺽정' }, { id: 3, name: '장보고' }, { id: 4, name: '이순신' } ];
	const [ num, setNum ] = useState(5);
	const [ users, setUsers ] = useState(sample);
	const download = () => {
		setUsers([ ...sample, { id: num, name: '조자룡' } ]); // 레퍼런스 변경되야 동작!!
		setNum(num + 1);
	};
	/* */

	return (
		<div>
			<div style={mystyle}>안녕 {b === 20 ? '20입니다.' : '20이 아닙니다'}</div>
			<h1 className='box-style'>헤딩태그{a === 10 && '10입니다'}</h1>
			<hr />
			<div>
				{list.map((n) => {
					return n;
				})}
				<br />
				<h1>숫자 : {number} </h1>
				<button onClick={add}>더하기</button>
				<Sub />
				<Third />
				<button onClick={download}>다운로드</button>
				{users.map((u) => (
					<h1>
						{u.id}.{u.name}
					</h1>
				))}
			</div>
			{numThird}
		</div>
	);
}

export default App;

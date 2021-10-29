import React from 'react';

const Home = (props) => {
	// console.log(1, props);
	// console.log(2, boards);

	// 구조분할 할당
	// const boards = props.boards;
	// const id = props.id;
	// 위의 방법안씀.

	// props 의 방향은 부모 => 자식 그려지는 방향이 부모 먼저 그려지고 자식이 그려지기 때문.
	const { boards, id, setBoards, number, setNumber } = props;

	return (
		<div>
			<h1>홈 : {number}</h1>
			<button
				onClick={() => {
					setNumber(number + 1);
				}}
			>
				홈 버튼 번호 증가
			</button>
			<button
				onClick={() => {
					setBoards([]);
				}}
			>
				전체삭제
			</button>
			{boards.map((board) => (
				<h3>
					title : {board.title} content: {board.content}
				</h3>
			))}
		</div>
	);
};

export default Home;

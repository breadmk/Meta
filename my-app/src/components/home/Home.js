import React from 'react';
import styled from 'styled-components';

// 부모로부터 받아온 어떤 데이터를  가지고 스타일링을 동적으로 할것이라면?
const StyledDeleteButton = styled.button`color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};`;

// 스타일 상속(Extending Styles)   //  styled(StyledDeleteButton)
const StyledAddButton = styled(StyledDeleteButton)`color: ${(props) =>
	props.user.username === 'ssar' ? 'blue' : 'red'};`;

const Home = (props) => {
	// console.log(1, props);
	// console.log(2, boards);

	// 구조분할 할당
	// const boards = props.boards;
	// const id = props.id;
	// 위의 방법안씀.

	// props 의 방향은 부모 => 자식 그려지는 방향이 부모 먼저 그려지고 자식이 그려지기 때문.
	const { boards, id, setBoards, number, setNumber, user } = props;
	console.log(user);

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
			<StyledAddButton user={user}>더하기</StyledAddButton>
			<StyledDeleteButton
				user={user}
				onClick={() => {
					setBoards([]);
				}}
			>
				전체삭제
			</StyledDeleteButton>
			{boards.map((board) => (
				<h3>
					title : {board.title} content: {board.content}
				</h3>
			))}
		</div>
	);
};

export default Home;

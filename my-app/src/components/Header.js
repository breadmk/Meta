import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(재사용)

// styled-components = > js 파일과 css 파일이 한곳에 있어서 관리하기 너무 편해짐.

const HeaderList = styled.div`
	border: 1px solid black;
	height: 300px;
`;

const Header = () => {
	return (
		<HeaderList>
			<ul>
				<li>메뉴 1</li>
				<li>메뉴 2</li>
				<li>메뉴 3</li>
			</ul>
		</HeaderList>
	);
};

export default Header;

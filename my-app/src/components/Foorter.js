import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(재사용)

// styled-components = > js 파일과 css 파일이 한곳에 있어서 관리하기 너무 편해짐.

const StyledFooterDiv = styled.div`
	border: 1px solid black;
	height: 300px;
`;

const Footer = () => {
	return (
		<StyledFooterDiv>
			<ul>
				<li>오시는길 : 서울특별시 강남구....</li>
				<li>전화번호 : 010-1234-1234</li>
			</ul>
		</StyledFooterDiv>
	);
};

export default Footer;

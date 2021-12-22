import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// 처음부터 구조분할 할당으로 받자! // 하나일때만 가능함.
// const BookItem = ({ id, title, author }) => {
const BookItem = (props) => {
	console.log(props);
	const { id, title, author } = props.book;
	return (
		<Card>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Link to={'/post/' + id} className='btn btn-primary'>
					상세보기
				</Link>
			</Card.Body>
		</Card>
	);
};

export default BookItem;

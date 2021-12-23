import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Detail = (props) => {
	// console.log(props);
	const id = props.match.params.id;
	const [ book, setBook ] = useState({
		id: '',
		title: '',
		author: ''
	});

	const deleteBook = (num) => {
		fetch('http://localhost:8080/book/' + num, {
			method: 'DELETE'
		})
			.then((res) => res.text())
			.then((res) => {
				if (res === 'ok') {
					props.history.push('/');
				} else {
					alert('삭제실패');
				}
			});
	};

	const updateBook = () => {
		props.history.push('/updateForm/' + id);
	};

	useEffect(() => {
		fetch('http://localhost:8080/book/' + id, { method: 'get' }).then((res) => res.json()).then((res) => {
			setBook(res);
			console.log(res);
		});
	}, []);

	return (
		<div>
			<h1>책 상세보기</h1>
			<Link to='/' className='btn btn-primary'>
				목록
			</Link>
			{` `}
			<Button variant='warning' onClick={updateBook}>
				수정
			</Button>
			{` `}
			<Button
				variant='danger'
				onClick={() => {
					deleteBook(book.id);
				}}
			>
				삭제
			</Button>
			<hr />
			<h3>저자 : {book.author}</h3>
			<h1>제목 : {book.title}</h1>
		</div>
	);
};

export default Detail;

import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UpdateForm = (props) => {
	const id = props.match.params.id;
	const [ book, setBook ] = useState({
		title: '',
		author: ''
	});

	useEffect(() => {
		fetch('http://localhost:8080/book/' + id, { method: 'get' }).then((res) => res.json()).then((res) => {
			setBook(res);
		});
	}, []);

	const changeValue = (e) => {
		setBook({
			...book,
			[e.target.name]: e.target.value
		});
	};

	const submitBook = (e) => {
		e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.
		fetch('http://localhost:8080/book/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(book)
		})
			.then((res) => {
				console.log(1, res);
				if (res.status === 200) {
					return res.json();
				} else {
					return null;
				}
			})
			// catch 는 아래에서 오류가 나야 실행됨.
			.then((res) => {
				console.log('정상', res);
				if (res !== null) {
					props.history.push('/book/' + id);
				} else {
					alert('책 수정에 실패하였습니다.');
				}
			})
			.catch((error) => {
				console.log('실패', error);
			});
	};

	return (
		<Form onSubmit={submitBook}>
			<Form.Group className='mb-3' controlId='formBasic'>
				<Form.Label>Title</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter Title'
					onChange={changeValue}
					name='title'
					value={book.title}
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasic'>
				<Form.Label>Author</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter Author'
					onChange={changeValue}
					name='author'
					value={book.author}
				/>
			</Form.Group>
			<Button variant='primary' type='submit'>
				수정하기
			</Button>
		</Form>
	);
};

export default UpdateForm;

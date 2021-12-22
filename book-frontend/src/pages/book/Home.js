import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';

const Home = () => {
	const [ books, setBooks ] = useState([]);

	// 함수 실행시 최초 한 번 실해되는 것 = > useEffort + 상태값이 변경될때마다 실행됨  [] <- 빈배열 꼭 걸어줘야함 안 걸어주면 무한 실행
	useEffect(() => {
		fetch('http://localhost:8080/book', {
			method: 'GET'
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setBooks(res);
			}); //비동기 함수
	}, []);

	return <div>{books.map((book) => <BookItem key={book.id} book={book} />)}</div>;
};

export default Home;

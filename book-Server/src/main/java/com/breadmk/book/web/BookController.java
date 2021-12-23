package com.breadmk.book.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.breadmk.book.domain.Book;
import com.breadmk.book.service.BookService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class BookController {
	
	private final BookService bookService;
	
	//  Spring security (라이브러리 적용) - CORS 정책을 가지고 있음.  여기시 팅기면 저 아래 @CrossOrigin 의미가 업음. (시큐리티가 CORS를 해제)
	// @CrossOrigin  사용시 Controller 진입 직전에 작동됨.
	
	@CrossOrigin
	@PostMapping("/book")
	public ResponseEntity<?> save(@RequestBody Book book){
		return new ResponseEntity<>(bookService.save(book),HttpStatus.CREATED); //201
	}

	@CrossOrigin
	@GetMapping("/book")
	public ResponseEntity<?> findAll(){
		return new ResponseEntity<>(bookService.findAll(),HttpStatus.OK); //200
	}
	
	@CrossOrigin
	@GetMapping("/book/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id){ //warpping 클래스 사용
		return new ResponseEntity<>(bookService.findOne(id),HttpStatus.OK); //200
	}
	
	@CrossOrigin
	@PutMapping("/book/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Book book){ //warpping 클래스 사용
		return new ResponseEntity<>(bookService.update(id, book),HttpStatus.OK); //200
	}
	
	@CrossOrigin
	@DeleteMapping("/book/{id}")
	public ResponseEntity<?> deleteById(@PathVariable Long id){ //warpping 클래스 사용
		return new ResponseEntity<>(bookService.delete(id),HttpStatus.OK); //200
	}
}






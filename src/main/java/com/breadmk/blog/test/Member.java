package com.breadmk.blog.test;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Member {
	
	private int id;
	private String username;
	private String password;
	private String email;

}

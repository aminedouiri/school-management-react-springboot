package com.aminedouiri.school.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RessourceNotFoundException extends RuntimeException{
	
	public static final long serialVersionUId = 1L;
	
	public RessourceNotFoundException(String message) {
		super(message);
	}

}
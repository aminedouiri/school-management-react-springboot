package com.aminedouiri.school.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aminedouiri.school.model.Student;
import com.aminedouiri.school.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")

public class StudentController {

	@Autowired
	private StudentRepository studentRepository;
	
	//get all student
		@GetMapping("/students")
		public List<Student> getAllStudents(){
			return  studentRepository.findAll();
		}
		
		//add new student
		@PostMapping("/students")
		public Student createStudent(@RequestBody Student student) {
			return studentRepository.save(student);
		}
		
		//get student by id
		@GetMapping("/students/{id}")
		public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
			Student student = studentRepository.findById(id).orElseThrow();
			return ResponseEntity.ok(student);
		}
		
		//update student
		@PutMapping("/students/{id}")
		public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails){
			
			Student student = studentRepository.findById(id).orElseThrow();
			
			student.setName(studentDetails.getName());
			student.setSurname(studentDetails.getSurname());
			student.setEmail(studentDetails.getEmail());
			student.setPhone(studentDetails.getPhone());
			
			
			Student updateStudent = studentRepository.save(student);
			
			return ResponseEntity.ok(updateStudent);
		}
		
		//delete student
		@DeleteMapping("/students/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id){
			Student student = studentRepository.findById(id).orElseThrow();
			
			studentRepository.delete(student);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}

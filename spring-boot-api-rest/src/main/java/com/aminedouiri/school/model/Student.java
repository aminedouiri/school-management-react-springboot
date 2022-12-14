package com.aminedouiri.school.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import java.sql.Date;

import javax.persistence.Column;


@Entity
@Table(name = "students")
public class Student {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;
	@Column(name = "student_name")
	private String name;
	@Column(name = "student_surname")
	private String surname;
	
	@Column(name = "student_date_birth")
	private Date dateBirth;
	
	@Column(name = "student_classe")
	private int classe;
	
	@Column(name = "student_email")
	private String email;
	
	@Column(name ="student_phone")
	private String phone;
	
	public Student() {
		
	}
	
	public Student(String name, String surname,Date dateBirth,int classe, String email, String phone) {
		super();
		this.name = name;
		this.surname = surname;
		this.dateBirth = dateBirth;
		this.classe = classe;
		this.email = email;
		this.phone = phone;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public Date getDateBirth() {
		return dateBirth;
	}
	
	public void setDateBirth(Date dateBirth) {
		this.dateBirth = dateBirth;
	}
	
	public int getClasse() {
		return classe;
	}
	public void setClasse(int classe) {
		this.classe = classe;
	}

	

}

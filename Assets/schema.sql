### Schema
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department
(
	ID INT AUTO_INCREMENT,
	Name varchar(30) NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE role
(
	ID INT AUTO_INCREMENT,
	Title varchar(30) NOT NULL,
    Salary DECIMAL NOT NULL,
	Department_ID INT,
	PRIMARY KEY (id)
	
);



CREATE TABLE employee
(
	ID INT AUTO_INCREMENT,
	First_name varchar(30) NOT NULL,
	Last_name varchar(30) NOT NULL,
	Role_ID INT NOT NULL,
	Manager_ID INT,
	PRIMARY KEY (id)
);


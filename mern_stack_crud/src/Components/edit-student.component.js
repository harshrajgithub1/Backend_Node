


import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForms";
import { useParams } from "react-router-dom";

const EditStudent = () => {
	const { id } = useParams();
	const [formValues, setFormValues] = useState({
	name: "",
	email: "",
	rollno: "",
	dateofbirth: "",
	phonenumber:"",
	password:"",
});




const onSubmit = (studentObject) => {
	axios
	.put(
		`http://localhost:4000/students/update-student/${id}` ,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};


useEffect(() => {
	axios
	.get(
		`http://localhost:4000/students/${id}`
	)
	.then((res) => {
		const { name, email, rollno, dateofbirth, phonenumber, password} = res.data;
		setFormValues({ name, email, rollno, dateofbirth, phonenumber, password });
	})
	.catch((err) => console.log(err));
}, [id]);



return (
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Student
	</StudentForm>
);
};


export default EditStudent;
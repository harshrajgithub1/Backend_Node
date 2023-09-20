
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForms";
import { APP_URL } from "../Constants/constants";


const CreateStudent = () => {
const [formValues, setFormValues] =
	useState({ name: '', email: '', rollno: '', dateofbirth: '', phonenumber: '', password:''})
	//console.log("error");
	//document.getElementById("harsh raj");


const onSubmit = studentObject => {
	axios.post(
`${APP_URL}/students/create-student`,
	studentObject)
	.then(res => {
		if (res.status === 200)
		alert('Student successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	


return(
	<StudentForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Student
	</StudentForm>
)
}


export default CreateStudent;







import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForms";
import { APP_URL } from "../Constants/constants";

import { Canvas } from "@react-three/fiber";

import Cylinder3d from "../3dModels/Cylinder3d";

//import React, { Component } from 'react';
import LoginPage from '../Components/Login/login';



const CreateStudent = () => {
const [formValues, setFormValues] =
	useState({ name: '', email: '', rollno: '', dateofbirth: '', phonenumber: '', password:'', fees:''})
	
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
<>
	<StudentForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Student
	</StudentForm>




<section className='App-header'>
        <Canvas>
          
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>
      </section>

</>
)
}


export default CreateStudent;





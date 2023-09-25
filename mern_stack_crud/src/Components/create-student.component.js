





import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForms";
import { APP_URL } from "../Constants/constants";

import { Canvas } from "@react-three/fiber";

import Cylinder3d from "../Components/3dModels/Cylinder3d";

//import React, { Component } from 'react';
import LoginPage from '../Components/Login/login';
import ThreeDModel from "./ThreeDModel";


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

	  <ThreeDModel />
        {/* Canvas 1 */}
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight />
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>
 
        {/* Canvas 2 */}
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight intensity={0.5} />
          <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
          <Cylinder3d position={[1.2, 0, 0]} wireframe={true} />
        </Canvas>
 
        {/* Canvas 3 */}
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight color={"red"} />
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>
      </section>
    

{/* <section className='App-header'>
        <Canvas>
		<pointLight position={[10, 10, 10]} />
		<ambientLight /> 
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>
      </section> */}

</>
)
}


export default CreateStudent;





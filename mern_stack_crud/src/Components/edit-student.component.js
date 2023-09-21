


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { APP_URL } from "../Constants/constants";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import {  Button } from "react-bootstrap";

const EditStudent = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [formValues, setFormValues] = useState({
	name: "",
	email: "",
	rollno: "",
	dateofbirth: "",
	phonenumber:"",
});
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string()
		.email("You have enter an invalid email address")
		.required("Required"),
	rollno: Yup.number()
		.positive("Invalid roll number")
		.integer("Invalid roll number")
		.required("Required"),
	dateofbirth: 
	 Yup.date()


	//            .positive("Invalid date of birth")
	// 		   .integer("Invalid date of birth")
			  // .required("Required"),     
});



const onSubmit = (studentObject) => {
	console.log(studentObject);
	axios
	.put(
		`${APP_URL}/students/update-student/${id}` ,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
		} else Promise.reject();
	})
	.catch((err) => {console.log(err); alert("Something went wrong")});
};


useEffect(() => {
	axios
	.get(
		`${APP_URL}/students/getstudent/${id}`
	)
	.then((res) => {
		console.log(res);
		if(res.status===200 && res.data !=null){
			const { name, email, rollno, dateofbirth, phonenumber} = res.data;
			setFormValues(res.data);
		}
		
	})
	.catch((err) => console.log(err))
	.finally(() => {
        // Set loading to false whether the request succeeds or fails
        setLoading(false);
      });
	console.log(formValues);
}, []);

if (loading) {
    // Render a loading indicator, e.g., a spinner
    return <div>Loading...</div>;
  }

return (
	
		<div className="form-wrapper">
			<Formik initialValues={formValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ errors, touched }) => (
					<Form>
						<label className="control-label">Name</label>
						<Field name="name" type="text" className="form-control" />
						{errors.name && touched.name ? (
							<div className="text-danger">{errors.name}</div>
						) : null}

						<label className="control-label">Email</label>
						<Field name="email" type="email" className="form-control" />
						{errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}

						<label className="control-label">Roll No</label>
						<Field name="rollno" className="form-control" />
						{errors.rollno && touched.rollno ? (
							<div className="text-danger">{errors.rollno}</div>
						) : null}

						<label className="control-label">Date of Birth</label>
						<Field name="dateofbirth" type="date" className="form-control"/>
						{errors.dateofbirth && touched.dateofbirth ? ( <div className="text-danger">{errors.dateofbirth}</div>
				        ) : null}


						<label className="control-label">Password</label>
 						<Field name="password" type="password" className="form-control" />
 						{errors.password && touched.password ? (<div className="text-danger">{errors.password}</div>
						) : null}

						<Button variant="danger" size="lg"
							block="block" type="submit">
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</div>
);
};


export default EditStudent;
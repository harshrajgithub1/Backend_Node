import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import axios from 'axios';

const StudentForm = (props) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Required"),
		email: Yup.string()
			.email("You have enter an invalid email address")
			.required("Required"),
		rollno: Yup.number()
			.positive("Invalid roll number")
			.integer("Invalid roll number")
			.required("Required"),
	});
	console.log(props);
	return (
		<div className="form-wrapper">
			<Formik initialValues={{
				name: '',
				rollno: '',
				email: '',
			}}
				validationSchema={validationSchema}
				onSubmit={values => {
					// same shape as initial values
					console.log(values);
					axios.post(
						'http://localhost:4000/students/create-student',
						values)
							.then(res => {
								if (res.status === 200)
								alert('Student successfully created')
								else
								Promise.reject()
							})
							.catch(err => alert('Something went wrong'))
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<label className="control-label">Name</label>
						<Field name="name" className="form-control" />
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
						<Button variant="danger" size="lg"
							block="block" type="submit">
							{props.children}
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default StudentForm;

// import React from "react";
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { FormGroup, FormControl, Button } from "react-bootstrap";
// import axios from 'axios';

// const StudentForm = (props) => {
// 	const validationSchema = Yup.object().shape({
// 		name: Yup.string().required("Required"),
// 		email: Yup.string()
// 			.email("You have enter an invalid email address")
// 			.required("Required"),
// 		rollno: Yup.number()
// 			.positive("Invalid roll number")
// 			.integer("Invalid roll number")
// 			.required("Required"),
// 		dateofbirth: 
// 		 Yup.date()
		
		 
// 		//            .positive("Invalid date of birth")
// 		// 		   .integer("Invalid date of birth")
// 				  // .required("Required"),     
// 	});
// 	console.log(props);
// 	return (
// 		<div className="form-wrapper">
// 			<Formik initialValues={{
// 				name: '',
// 				rollno: '',
// 				email: '',
// 				dateofbirth:'',
// 			}}
// 				validationSchema={validationSchema}
// 				onSubmit={values => {
// 					// same shape as initial values
// 					console.log(values);
// 					axios.post(
// 						'http://localhost:4000/students/create-student',
// 						values)
// 							.then(res => {
// 								if (res.status === 200)
// 								alert('Student successfully created')
// 								else
// 								Promise.reject()
// 							})
// 							.catch(err => alert('Something went wrong'))
// 				}}
// 			>
// 				{({ errors, touched }) => (
// 					<Form>
// 						<label className="control-label">Name</label>
// 						<Field name="name" className="form-control" />
// 						{errors.name && touched.name ? (
// 							<div className="text-danger">{errors.name}</div>
// 						) : null}

// 						<label className="control-label">Email</label>
// 						<Field name="email" type="email" className="form-control" />
// 						{errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}

// 						<label className="control-label">Roll No</label>
// 						<Field name="rollno" className="form-control" />
// 						{errors.rollno && touched.rollno ? (
// 							<div className="text-danger">{errors.rollno}</div>
// 						) : null}

// 						<label className="control-label">Date of Birth</label>
// 						<Field name="dateofbirth" type="date" className="form-control"/>
// 						{errors.dateofbirth && touched.dateofbirth ? ( <div className="text-danger">{errors.dateofbirth}</div>
// 				        ) : null}

// 						<Button variant="danger" size="lg"
// 							block="block" type="submit">
// 							{props.children}
// 						</Button>
// 					</Form>
// 				)}
// 			</Formik>
// 		</div>
// 	);
// };

// export default StudentForm;





// import React, { useEffect, useState} from "react";
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { FormGroup, FormControl, Button } from "react-bootstrap";
// import axios from 'axios';
// import { useParams } from "react-router-dom";

// const  Forms =  (props) => {


// const {id} =useParams();
// const [values, setValues]= useState({
// 	id:id,
// 	name:'',
// 	email:'',
// 	rollno:'',
// 	dateofbirth:'',
// 	phonenumber:'',
// 	password:'',

// });
// useEffect(()=> {
//        axios.get('http://localhost:3000/edit-student/'  +id)
// 	   .then(res => {
// 		      setValues({...values, name: res.data.name, email:res.data.email});
// 	   })
// 	   .catch((err) => console.log(err));
//    }, [id]);
// };

// const FormsUpdate = (props) => {
// 	const validationSchema = Yup.object().shape({
// 		name: Yup.string().required("Required"),
// 		email: Yup.string()
// 			.email("You have enter an invalid email address")
// 			.required("Required"),
// 		rollno: Yup.number()
// 			.positive("Invalid roll number")
// 			.integer("Invalid roll number")
// 			.required("Required"),
// 		dateofbirth: 
// 		 Yup.date()
// 		 .typeError("please enter a valid date")
// 		 .required()
// 		 .min("1969-11-13", "Date is too early")

		 
// 		//            .positive("Invalid date of birth")
// 		// 		   .integer("Invalid date of birth")
// 				  // .required("Required"),     
// 	});
// 	console.log(props);
// 	return (
// 		<div className="form-wrapper">
// 			<Formik initialValues={{
// 				name: '',
// 				rollno: '',
// 				email: '',
// 				dateofbirth:'',
// 				phonenumber: '',
// 				password: ''
// 			}}
// 				validationSchema={validationSchema}
// 				onSubmit={values => {
// 					// same shape as initial values
// 					console.log(values);
// 					axios.post(
// 						'http://localhost:4000/students/create-student',
// 						values)
// 							.then(res => {
// 								if (res.status === 200)
// 								alert('Student successfully created')
// 								else
// 								Promise.reject()
// 							})
// 							.catch(err => alert('Something went wrong'))
// 				}}
// 			>
// 				{({ errors, touched }) => (
// 					<Form>
// 						<label className="control-label">Name</label>
// 						<Field name="name" className="form-control" values={values.name} onChange={e => setValues({...values,name:e.target.value})}/>
// 						{errors.name && touched.name ? (
// 							<div className="text-danger">{errors.name}</div>
// 						) : null}

// 						<label className="control-label">Email</label>
// 						<Field name="email" type="email" className="form-control" values={values.email} onChange={e => setValues({...values,email:e.target.value})} />
// 						{errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}

// 						<label className="control-label">Roll No</label>
// 						<Field name="rollno" className="form-control" values={values.rollno} onChange={e => setValues({...values,rollno:e.target.value})}/>
// 						{errors.rollno && touched.rollno ? (
// 							<div className="text-danger">{errors.rollno}</div>
// 						) : null}

// 						<label className="control-label">Date of Birth</label>
// 						<Field name="dateofbirth" type="date" className="form-control"  values={values.dateofbirth} onChange={e => setValues({...values,dateofbirth:e.target.value})}/>
// 						{errors.dateofbirth && touched.dateofbirth ? ( <div className="text-danger">{errors.dateofbirth}</div>
// 				        ) : null}

// 						<label className="control-label">Phone Number</label>
// 						<Field name="phonenumber" type="phonenumber" className="form-control" values={values.phonenumber} onChange={e => setValues({...values,phonenumber:e.target.value})}/>
// 						{errors.phonenumber && touched.phonenumber ? (<div className="text-danger">{errors.phonenumber}</div> 
// 						): null}

// 						<label className="control-label">Password</label>
// 						<Field name="password" type="password" className="form-control" values={values.password} onChange={e => setValues({...values,password:e.target.value})}/>
// 						{errors.password && touched.password ? (<div className="text-danger">{errors.password}</div>
// 						) : null}
 
// 						<Button variant="danger" size="lg"
// 							block="block" type="submit">
// 							{props.children}
// 						</Button>
// 					</Form>
// 				)}
// 			</Formik>
// 		</div>
// 	);
// };

// export default StudentForm;



import React, { useEffect , useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import axios from 'axios';
import { useParams } from "react-router-dom";

const  StudentForm =  (props) => {


const {id} =useParams();
const [values, setValues]= useState({
	id:id,
	name:'',
	email:'',
	rollno:'',
	dateofbirth:'',
	phonenumber:'',
	password:'',

});


useEffect(()=> {
	axios.get('http://localhost:4000/getstudent/'  +id)
	.then(res => {
console.log(res)
		   setValues({...values, name: res.data.name, email:res.data.email});
	})
	.catch((err) => console.log(err));
}, [id]);
};




const FormsUpdate = (props) => {
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
		 .typeError("please enter a valid date")
		 .required()
		 .min("1969-11-13", "Date is too early")

		 
		//            .positive("Invalid date of birth")
		// 		   .integer("Invalid date of birth")
				  // .required("Required"),     
	});
	console.log(props);
	return (
		<div className="form-wrapper">
			<Formik initialValues={{
				name: '',
				rollno: '',
				email: '',
				dateofbirth:'',
				phonenumber: '',
				password: ''
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
						<Field name="name" className="form-control" values={values.name} onChange={(e) => setValues({...values,name:e.target.value})}/>
						{errors.name && touched.name ? (
							<div className="text-danger">{errors.name}</div>
						) : null}

						<label className="control-label">Email</label>
						<Field name="email" type="email" className="form-control" values={values.email} onChange={(e) => setValues({...values,email:e.target.value})} />
						{errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}

						<label className="control-label">Roll No</label>
						<Field name="rollno" className="form-control" values={values.rollno} onChange={(e) => setValues({...values,rollno:e.target.value})}/>
						{errors.rollno && touched.rollno ? (
							<div className="text-danger">{errors.rollno}</div>
						) : null}

						<label className="control-label">Date of Birth</label>
						<Field name="dateofbirth" type="date" className="form-control"  values={values.dateofbirth} onChange={(e) => setValues({...values,dateofbirth:e.target.value})}/>
						{errors.dateofbirth && touched.dateofbirth ? ( <div className="text-danger">{errors.dateofbirth}</div>
				        ) : null}

						<label className="control-label">Phone Number</label>
						<Field name="phonenumber" type="phonenumber" className="form-control" values={values.phonenumber} onChange={(e) => setValues({...values,phonenumber:e.target.value})}/>
						{errors.phonenumber && touched.phonenumber ? (<div className="text-danger">{errors.phonenumber}</div> 
						): null}

						<label className="control-label">Password</label>
						<Field name="password" type="password" className="form-control" values={values.password} onChange={(e) => setValues({...values,password:e.target.value})}/>
						{errors.password && touched.password ? (<div className="text-danger">{errors.password}</div>
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

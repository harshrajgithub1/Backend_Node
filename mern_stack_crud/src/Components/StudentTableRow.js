import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { APP_URL } from '../Constants/constants';

const StudentTableRow = (props) => {
const { _id, name, email, rollno, dateofbirth, phonenumber, password } = props.obj;

const deleteStudent = () => {
	axios
	.delete(
`${APP_URL}/students/delete-student/` + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<>
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{rollno}</td>
	<td>{dateofbirth}</td>
	<td>{phonenumber}</td>
	<td>{password}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-student/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteStudent}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
	</>
);
};

export default StudentTableRow;

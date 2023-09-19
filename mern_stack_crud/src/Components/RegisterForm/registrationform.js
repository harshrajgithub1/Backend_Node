
// import "./registration.css";
// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const RegistrationForm = () => {


//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');



//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleDateOfBirthChange = (e) => {
//     setDateOfBirth(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (firstName == '' || lastName == '' || dateOfBirth == '' || email == '' || password == '') {
//       toast.error('* All fields are required', {
//         position: toast.POSITION.TOP_RIGHT
//       });
//     }
//     else{
//       toast.success('Successfully Registered', {
//         position: toast.POSITION.TOP_RIGHT
//       });
//     }
//     // Handle form submission logic here
//     console.log('Submitted:', firstName, lastName, dateOfBirth, email, password);
//   };


//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="registr-form">
//         <div className="row">
//           <h1 className="text-center">Register Form</h1>
//           <hr/>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <label htmlFor="firstName">First Name:</label>
//             <input
//               className="form-control"
//               type="text"
//               id="firstName"
//               value={firstName}
//               onChange={handleFirstNameChange}
//               required
//               placeholder='FirstName'
//             />
//           </div>
//           <div className="col-md-6">
//             <label htmlFor="lastName">Last Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="lastName"
//               value={lastName}
//               onChange={handleLastNameChange}
//               required
//               placeholder='LastName'
//             />
//           </div>

//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <label htmlFor="dateOfBirth">Date of Birth:</label>
//             <input
//               className="form-control"
//               type="date"
//               id="dateOfBirth"
//               value={dateOfBirth}
//               onChange={handleDateOfBirthChange}
//               required
//             />
//           </div>


//           <div className="col-md-6">
//             <label htmlFor="email">Email:</label>
//             <input
//               className="form-control"
//               type="email"
//               id="email"
//               value={email}
//               onChange={handleEmailChange}
//               required
//               placeholder='abc@outlook.com'
//             />
//           </div>
//         </div>


//         <div className="row">
//           <div className="col-md-6">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//               placeholder='**********'
//               className="form-control"
//             />
//           </div>
//           <div className="col-md-6">
//             <label htmlFor="confirmPassword">Confirm Password:</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={handleConfirmPasswordChange}
//               required
//               placeholder='**********'
//               className="form-control"
//             />
//           </div>

//         </div>


//         <div>
//           <ToastContainer />
//         </div>

//         <button type="submit" className="btn btn-success">Register</button>

//       </form>
//     </div>

//   );
// };


// export default RegistrationForm;








import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj={
      name: 'Nishant',
      email : 'nis@te.po',
      password: '12'
    }
    // Simulate registration (replace with actual registration logic)
    if (formData.username && formData.email && formData.password) {
      axios.post(
        'http://localhost:4000/users/create-user',
        obj)
          .then(res => {
            if (res.status === 200)
            alert('Student successfully created')
            else
            Promise.reject()
          })
          .catch(err => alert('Something went wrong'))
      setRegistered(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  
  return (
    <div>
      {registered ? (
        <div>
          <h2>Registration Successful!</h2>
          <p>You are now registered as {formData.username}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationPage;

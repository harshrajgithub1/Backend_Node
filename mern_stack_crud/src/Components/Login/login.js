



// import React, { useState } from 'react';
// import axios from 'axios';
// import './login.css';
// //import StudentForm from "./StudentForms";
// import { APP_URL } from '../../Constants/constants';
// import { useHistory } from 'react-router-dom';
// //import CreateStudent from '../create-student.component';
// import { Route, Routes, useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleChange = (e) => {

//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     const navigate = useNavigate(); 
//     //1 check if data inserted by user in form
//     console.log(formData);
//     if (formData.username ==null && formData.password == null)
//     {
//       alert('Please insert data.');
//       return false;
//     }
//     //2 check if user exist in database
//     axios.get(
//       `${APP_URL}/users/getuserbyemail/`+formData.username
//       )
//         .then(res => {
//           console.log(res);
//           if (res.status === 200 && res.data !=null)
//           {
//             //
//             alert('User found')
//             if(res.data.password === formData.password){
//               alert("successfully logged in");
//               navigate('/create-student', { replace: true });
//             }
//             else{
//               alert("invalid credentials");
//             }
//           }
//           else{
//             alert("User not exists");

//           }
//         })
//         .catch(err => alert('Something went wrong'))
//     //3 if user exists then check user password matched with stored password

//     // generate token
//     e.preventDefault();
//     // Simulate authentication (replace with actual authentication logic)
    
//   };

//   return (
//     <div>
//       {loggedIn ? (
//         <div>
//           <h2>Welcome, {formData.username}!</h2>
//           <button onClick={() => setLoggedIn(false)}>Logout</button>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <h2>Login</h2>
//           <div>
//             <label>Username:</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
          
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginPage;








import React, { useState } from 'react';
import axios from 'axios';
//import jwt from "jsonwebtoken";
import './login.css';
//import StudentForm from "./StudentForms";
import { APP_URL } from '../../Constants/constants';
import { useHistory } from 'react-router-dom';
//import CreateStudent from '../create-student.component';
import { Route, Routes, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    //1 check if data inserted by user in form
    console.log(formData);
    if (formData.username ==null && formData.password == null)
    {
      alert('Please insert data.');
      return false;
    }
    //2 check if user exist in database
    axios.get(
      `${APP_URL}/users/getuserbyemail/`+formData.username
      )
        .then(res => {
          console.log(res);
          if (res.status === 200 && res.data !=null)
          {
            //
            alert('User found')
            if(res.data.password === formData.password){
              alert("successfully logged in");
              navigate('/create-student', { replace: true });
            }
            else{
              alert("invalid credentials");
            }
          }
          else{
            alert("User not exists");

          }
        })
        .catch(err => alert('Something went wrong'))
    //3 if user exists then check user password matched with stored password

    // generate token
    e.preventDefault();
    // Simulate authentication (replace with actual authentication logic)
    
  //   const token = jwt.login(
  //     { user_id: user._id, email,  roles: user.roles[0] },
  //     process.env.TOKEN_KEY,
  //     {
  //         expiresIn: "9h",
  //     }
  // );

  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Welcome, {formData.username}!</h2>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          
        </form>
      )}
    </div>
  );
};

export default LoginPage;

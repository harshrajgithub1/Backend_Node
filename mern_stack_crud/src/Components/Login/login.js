


// import React, { useState } from 'react';
// //import { FaLinkedin } from 'react-icons/fa';
// //import { FaFacebook } from 'react-icons/fa';
// //import { ToastContainer, toast } from 'react-toastify';
// //import 'react-toastify/dist/ReactToastify.css';
// import './login.css';
// import { usersData } from '../../Models/user';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const users = usersData;
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform validation
//     if (username.trim() !== '' && password.trim() !== '') {
//       let user = users.filter((x) => x.email === username);

//       if (user.length > 0) {
//         user = user[0];

//         if (user.password === password) {
//           localStorage.setItem('user', JSON.stringify(user));
//           setIsLoggedIn(true);
//           toast.success('Login Success', {
//             position: toast.POSITION.BOTTOM_CENTER,
//           });
//           window.location.href='/home';
//         } else {
//           toast.error('Wrong credential', {
//             position: toast.POSITION.BOTTOM_CENTER,
//           });
//         }
//       } else {
//         toast.error('User doesn\'t exist', {
//           position: toast.POSITION.BOTTOM_CENTER,
//         });
//       }
//     } else {
//       toast.error('* All fields are required', {
//         position: toast.POSITION.BOTTOM_CENTER,
//       });
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     toast.success('Logout Success', {
//       position: toast.POSITION.BOTTOM_CENTER,
//     });
//   };

//   return (
//     <div className='container p-20'>
//       <div className='row'>
//       <div className='col-md-6'>
//       <img src='https://picsum.photos/200/140?grayscale' className='img-responsive'></img>
      
//       </div>
//       <div className='col-md-6'>
//       {isLoggedIn ? (
//         <div>
//           <h1 className="text-center">Welcome, {localStorage.getItem('user').name}</h1>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <form className="login-form" onSubmit={handleSubmit}>
//             <div className="row">
//           <h1 className="text-center">Login</h1>
//               <div className="col-md-12">
//                 <label htmlFor="username">Username:</label>
//                 <input
//                   type="text"
//                   id="username"
//                   className="form-control"
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="col-md-12">
//                 <label htmlFor="password">Password:</label>
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="*********"
//                   className="form-control"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//             <button type="submit" className='btn btn-lg btn-success form-control'>Login</button>
//             <br />
//             <div className="noaccount">
//               <h6>
//                 "Don't have an account?"
//                 <a className="anotheroption" href="register">
//                   Sign-up
//                 </a>
//               </h6>
//             </div>
//             <div className="alternateoption">
//               <span>Or</span>
//             </div>
//             <div className="social-icons">
//               <FaLinkedin className="social-icon" />
//               <FaFacebook className="social-icon" />
//             </div>
//           </form>
//           <ToastContainer />
//         </div>
//       )}
//       </div>
//       </div>
      
//     </div>
//   );
// };

// export default LoginForm;




import React, { useState } from 'react';

const LoginPage = () => {
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
    e.preventDefault();
    // Simulate authentication (replace with actual authentication logic)
    if (formData.username === 'yourusername' && formData.password === 'yourpassword') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
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

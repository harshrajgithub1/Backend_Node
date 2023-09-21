// export default App;





// import React from "react";


// import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

// import "./App.css";

// import { BrowserRouter as Router, Switch,Route,Routes, Link } from "react-router-dom";

// import CreateStudent from "./Components/create-student.component";
// import EditStudent from "./Components/edit-student.component";
// import StudentList from "./Components/student-list.component";
// import  StudentTableRow from "./Components/StudentTableRow";


// const App = () => {
// return (
// 	<Router>
// 	<div className="App">
// 		<header className="App-header">
// 		<Navbar bg="dark" variant="dark">
// 			<Container>
// 			<Navbar.Brand>
// 				<Link to={"/create-student"}
// 				className="nav-link">
// 				React MERN Stack App
// 				</Link>
// 			</Navbar.Brand>

// 			<Nav className="justify-content-end">
// 				<Nav>
// 				<Link to={"/create-student"}
// 					className="nav-link">
// 					Create Student
// 				</Link>
// 				</Nav>

// 				<Nav>
// 				<Link to={"/student-list"}
// 					className="nav-link">
// 					Student List
// 				</Link>
// 				</Nav>
// 			</Nav>
// 			</Container>
// 		</Navbar>
// 		</header>

// 		<Container>
// 		<Row>
// 			<Col md={12}>
// 			<div className="wrapper">
// 				 <Switch> 
// 				<Route exact path="/" component={CreateStudent} />
// 				<Route path="/create-student" component={StudentTableRow} />
// 				<Route path="/edit-student/:id" component={EditStudent} />
// 				<Route path="/student-list" component={StudentList} />
// 				 </Switch>
// 			</div>
// 			</Col>
// 		</Row>
// 		</Container>
// 	</div>
// 	</Router>
// );
// };

// export default App;




// import CreateStudent from "./Components/create-student.component";
// import EditStudent from "./Components/edit-student.component";
// import StudentList from "./Components/student-list.component";
// import  StudentTableRow from "./Components/StudentTableRow";




// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CreateStudent from './components/create-student.component';
// // import About from './components/About';
// // import Contact from './components/Contact';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;






import React, { Fragment } from 'react';
import Route from './route/route.js';
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Header from './Shared/Header.js';
//import LoginPage from './LoginPage';
import CreateStudent from './Components/create-student.component.js';


const App = () => {
  return (
    <Route/>  
    
    
  );
};

// export default App;





// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import CreateStudent from "../src/Components/create-student.component";
// import EditStudent from "../src/Components/edit-student.component";
// import StudentList from "../src/Components/student-list.component";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Navbar.Brand>
//               <Link to="/" className="nav-link">
//                 React MERN Stack App
//               </Link>
//             </Navbar.Brand>
//             <Nav className="justify-content-end">
//               <Nav.Item>
//                 <Link to="/create-student" className="nav-link">
//                   Create Student
//                 </Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Link to="/student-list" className="nav-link">
//                   Student List
//                 </Link>
//               </Nav.Item>
//             </Nav>
//           </Container>
//         </Navbar>
//       </div>
//       <Container>
//         <Route exact path="/" component={CreateStudent} />
//         <Route path="/create-student" component={CreateStudent} />
//         <Route path="/edit-student/:id" component={EditStudent} />
//         <Route path="/student-list" component={StudentList} />
//       </Container>
//     </Router>
//   );
// };

// export default App;





// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Routes
// import { Navbar, Container, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import CreateStudent from "../src/Components/create-student.component";
// import EditStudent from "../src/Components/edit-student.component";
// import StudentList from "../src/Components/student-list.component";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Navbar.Brand>
//               <Link to="/" className="nav-link">
//                 React MERN Stack App
//               </Link>
//             </Navbar.Brand>
//             <Nav className="justify-content-end">
//               <Nav.Item>
//                 <Link to="/create-student" className="nav-link">
//                   Create Student
//                 </Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Link to="/student-list" className="nav-link">
//                   Student List
//                 </Link>
//               </Nav.Item>
//             </Nav>
//           </Container>
//         </Navbar>
//       </div>
//       <Container>
//         <Routes> {/ Use Routes instead of Switch /}
//           <Route path="/" element={<CreateStudent />} />
//           <Route path="/create-student" element={<CreateStudent />} />
//           <Route path="/edit-student/:id" element={<EditStudent />} />
//           <Route path="/student-list" element={<StudentList />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;




// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import CreateStudent from "../src/Components/create-student.component";
// import EditStudent from "../src/Components/edit-student.component";
// import StudentList from "../src/Components/student-list.component";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Navbar.Brand>
//               <Link to="/" className="nav-link">
//                 React MERN Stack App
//               </Link>
//             </Navbar.Brand>
//             <Nav className="justify-content-end">
//               <Nav.Item>
//                 <Link to="/create-student" className="nav-link">
//                   Create Student
//                 </Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Link to="/student-list" className="nav-link">
//                   Student List
//                 </Link>
//               </Nav.Item>
//             </Nav>
//           </Container>
//         </Navbar>
//       </div>
//       <Container>
//         <Route exact path="/" element={<CreateStudent />} />
//         <Route path="/create-student" element={<CreateStudent />} />
//         <Route path="/edit-student/:id" element={<EditStudent />} />
//         <Route path="/student-list" element={<StudentList />} />
//       </Container>
//     </Router>
//   );
// };

// export default App;








// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import CreateStudent from "../src/Components/create-student.component";
// import EditStudent from "../src/Components/edit-student.component";
// import StudentList from "../src/Components/student-list.component";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Navbar.Brand>
//               <Link to="/" className="nav-link">
//                 React MERN Stack App
//               </Link>
//             </Navbar.Brand>
//             <Nav className="justify-content-end">
//               <Nav.Item>
//                 <Link to="/create-student" className="nav-link">
//                   Create Student
//                 </Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Link to="/student-list" className="nav-link">
//                   Student List
//                 </Link>
//               </Nav.Item>
//             </Nav>
//           </Container>
//         </Navbar>
//       </div>
//       <Container>
//         <Routes> {/ Use Routes to wrap Route components /}
//           <Route path="/" element={<CreateStudent />} />
//           <Route path="/create-student" element={<CreateStudent />} />
//           <Route path="/edit-student/:id" element={<EditStudent />} />
//           <Route path="/student-list" element={<StudentList />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

export default App;
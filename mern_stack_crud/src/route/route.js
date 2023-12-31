import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateStudent from "../../src/Components/create-student.component";
import EditStudent from "../../src/Components/edit-student.component";
import StudentList from "../../src/Components/student-list.component";
import Layout from '../Shared/layout';
import RegisterForm from '../Components/RegisterForm/registrationform';
import Login from '../Components/Login/login';
import LoginPage from '../Components/Login/login';

export default function PageRoute() {
    return (
        <BrowserRouter>
          <Routes>
            

            <Route path="/" element={<Layout/>}>
            <Route path="/create-student" element={<CreateStudent/>} />
            <Route path="/edit-student/:id" element={<EditStudent/>} />
            <Route path="/student-list" element={<StudentList/>} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginPage />} />
            
            <Route path="/create-student" component={CreateStudent} /> 
                

              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>

            
          </Routes>
        </BrowserRouter>
      );
}

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateStudent from "../../src/Components/create-student.component";
import EditStudent from "../../src/Components/edit-student.component";
import StudentList from "../../src/Components/student-list.component";
import Layout from '../Shared/layout';

export default function PageRoute() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/create-student" element={<CreateStudent/>} />
          <Route path="/edit-student/:id" element={<EditStudent/>} />
          <Route path="/student-list" element={<StudentList/>} />

              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      );
}

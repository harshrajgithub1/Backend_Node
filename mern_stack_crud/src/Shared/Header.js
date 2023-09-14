import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>
              <h1>Backend</h1>
            </span>
          </h2>
        </div>
        <div>
        </div>
        <div className='menu-link'>
          <ul>
            <li>
              <Link to="/create-student" className="nav-link">
                Create Student
              </Link>
            </li>
            <li>
              <Link to='/student-list' className="nav-link">List</Link>
            </li>
            {/* <li>
              <Link to='/edit-student/:id' className="nav-link">Student Edit</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

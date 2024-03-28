import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AllCourses from './Allcourses';
import FullStackDevelopment from './Fullstackdevelopment';
import DataScience from './Datascience';
import CyberSecurity from './cybersecurity';
import './styles.css';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="/full-stack-development" activeClassName="active">
                Full Stack Development
              </NavLink>
            </li>
            <li>
              <NavLink to="/data-science" activeClassName="active">
                Data Science
              </NavLink>
            </li>
            <li>
              <NavLink to="/cyber-security" activeClassName="active">
                Cyber Security
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
        </Routes>

       
      </div>
    </Router>
  );
}

export default App;

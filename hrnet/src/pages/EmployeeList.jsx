import React from 'react';
import DisplayEmployee from '../components/DisplayEmployee';
import { Link } from 'react-router-dom';

function EmployeeList() {

    return (
        
        <div>
            <h1>Employee List</h1>
            <DisplayEmployee />
            <br></br>
            <Link to="/">Back to create Employee</Link>
        </div>
    )
}

export default EmployeeList;
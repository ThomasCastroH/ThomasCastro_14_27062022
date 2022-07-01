import React from 'react';
import DisplayEmployee from '../components/DisplayEmployee';
import Typography from '@mui/material/Typography';
import NavigateButton from '../components/NavigateButton';


function EmployeeList() {

    return (
        
        <div>
            <Typography variant="h4" sx={{ margin: "3rem 0", textAlign: "center" }}>Employees List</Typography>
            <DisplayEmployee />
            <NavigateButton url="/" text="Go to create employee" />
        </div>
    )
}

export default EmployeeList;
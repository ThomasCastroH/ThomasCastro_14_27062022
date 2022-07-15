import React from "react";
import { useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import labels from "../data/labels.json";

function DisplayEmployee() {

    let employees = useSelector((state) => state.employees.employee);

    const createData = (id, firstname, lastname, birthDate, startDate, department, street, city, state, zip) => {
        return { id, firstname, lastname, birthDate, startDate, department, street, city, state, zip };
    }

    const rows = employees.map((employee) => 
        createData(
            employee.id,
            employee.firstname,
            employee.lastname,
            employee.birthDate,
            employee.startDate,
            employee.department,
            employee.street,
            employee.city,
            employee.state,
            employee.zip
        )
    );

    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {labels.map((label, index) => (
                            <TableCell key={index}>{label.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.firstname}
                            </TableCell>
                            <TableCell align="left">{row.lastname}</TableCell>
                            <TableCell align="left">{row.birthDate}</TableCell>
                            <TableCell align="left">{row.startDate}</TableCell>
                            <TableCell align="left">{row.department}</TableCell>
                            <TableCell align="left">{row.street}</TableCell>
                            <TableCell align="left">{row.city}</TableCell>
                            <TableCell align="left">{row.state}</TableCell>
                            <TableCell align="left">{row.zip}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DisplayEmployee;
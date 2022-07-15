import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import states from "../data/states.json";
import departments from "../data/departments.json";

function Form() {

    const dispatch = useDispatch();

    const [user, setUser] = useState({});
    const [errors, setErrors] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    };

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            id: Date.now(),
            ...user,
        };

        dispatch(addEmployee(data));
    };

    let date = new Date().toISOString().substr(0, 10);


    console.log(user.firstname);
    return (
        <Box 
            id="form"
            component="form"
            onSubmit={handleSubmit}
            sx={{ textAlign: "center", margin: "0 5rem" }}
        >
            <Typography variant="h5"
                sx={{ marginTop: "4rem" }}
            >
                Informations
            </Typography>
            <Grid container spacing={3}
                sx={{ marginTop: "0.5rem" }}
            >
                <Grid item xs={12} sm={6}>
                    <TextField inputProps={{ pattern: "[a-zA-Z]+$" }} fullWidth id="firstname" name="firstname" label="Firstname" onChange={handleChange} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField inputProps={{ pattern: "[a-zA-Z]+$" }} fullWidth id="lastname" name="lastname" label="Lastname" onChange={handleChange} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth type="date" id="birthDate" name="birthDate" label="Date of Birth" onChange={handleChange} value={user.birthDate || "1970-01-01"} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth type="date" id="startDate" name="startDate" label="Starting Date" onChange={handleChange} value={user.startDate || date} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth select id="department" name="department" label="Department" onChange={handleChange} required value={user.department || ""} sx={{textAlign: "left"}} >
                        {departments.map((department, index) => (
                            <MenuItem key={index} value={department.name}>{department.name}</MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <Typography variant="h5"
                sx={{ marginTop: "3rem" }}
            >
                Adress
            </Typography>
            <Grid container spacing={3}
                sx={{ marginTop: "0.5rem" }}
            >
                <Grid item xs={12} sm={6}>
                    <TextField inputProps={{ pattern: "[0-9]+.*([a-zA-Z]+$)" }} fullWidth id="street" name="street" label="Street" onChange={handleChange} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField inputProps={{ pattern: "[a-zA-Z]+$" }} fullWidth id="city" name="city" label="City" onChange={handleChange} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth select id="state" name="state" label="State" onChange={handleChange} required value={user.state || ""} sx={{textAlign: "left"}} >
                        {states.map((state, index) => (
                            <MenuItem key={index} value={state.abbreviation}>{state.name}</MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField inputProps={{ pattern: "[0-9]+$" }} fullWidth id="zip" name="zip" label="Zipcode" onChange={handleChange} required />
                </Grid>
            </Grid>

            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                sx={{ marginTop: "2rem", width: "250px" }}
            >
                Create Employee
            </Button>
        </Box>
  );
}

export default Form;
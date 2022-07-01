import Form from "../components/Form";
import Typography from "@mui/material/Typography";
import NavigateButton from "../components/NavigateButton";



function CreateEmployee() {

    return (
        <div>
            <Typography variant="h4" sx={{ marginTop: "3rem", textAlign: "center", fontWeight: "bold" }}>CREATE EMPLOYEE</Typography>
            <Form />
            <NavigateButton url="/employee-list" text="View employee list" />           
        </div>
    )
}

export default CreateEmployee;
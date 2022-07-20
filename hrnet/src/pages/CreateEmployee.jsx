import { useState } from "react";
import Form from "../components/Form";
import Typography from "@mui/material/Typography";
import NavigateButton from "../components/NavigateButton";
import SimpleModal from "../components/SimpleModal";

function CreateEmployee() {

    const [show, setShow] = useState(false);

    return (
        <div>
            <Typography variant="h4" sx={{ marginTop: "3rem", textAlign: "center", fontWeight: "bold" }}>CREATE EMPLOYEE</Typography>
            <Form setShow={setShow}/>
            <SimpleModal show={show} setShow={setShow} />
            <NavigateButton url="/employee-list" text="View employee list" />           
        </div>
    )
}

export default CreateEmployee;
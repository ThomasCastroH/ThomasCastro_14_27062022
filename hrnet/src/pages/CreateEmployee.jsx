import Form from "../components/Form";
import { Link } from "react-router-dom";

function CreateEmployee() {

    return (
        <div>
            <h1>Create Employee</h1>
            <Form />
            <Link to="/employee-list">View current employees</Link>
        </div>
    )
}

export default CreateEmployee;
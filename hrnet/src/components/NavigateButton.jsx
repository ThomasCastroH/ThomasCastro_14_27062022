import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function NavigateButton(props) {

    let url = props.url;
    let text = props.text;

    console.log(url);

    let navigate = useNavigate();

    return (
        <Button 
            variant="contained"
            color="primary"
            onClick={() => {
                console.log('clicked');
                navigate(url);
            }}
            sx={{ margin: "2rem auto", display: "block", width: "250px" }}
        >
            {text}
        </Button>
    )
}

export default NavigateButton;
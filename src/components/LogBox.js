import React from "react";
import {TextField,Button,FormControl,Hidden} from "@mui/material";
import {Link, useNavigate,Navigate} from "react-router-dom"
import './LogBox.css'
const LogBox=()=>{

    const navigate=useNavigate();
    function handleClick(event){
        event.preventDefault();
        navigate('/');
    }

    return(
        <div>
            <form className="box" onSubmit={handleClick}>
                <p className="ask">Sign In</p>
                <TextField className="inp" type="text" label="Username" required></TextField>
                <br></br>
                <TextField className="inp" type="password" label="Password" required></TextField>
                <br></br>
                    <Button type="submit"  id="button" variant="contained">
                        Log In 
                    </Button>
                    
                <p>Or</p>
                <div className="icons">
                    <a href="#"><img className="icon" width={30} src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png"></img></a>
                    <a href="#"><img className="icon" width={32} src="https://cdn-icons-png.flaticon.com/512/2504/2504947.png"></img></a>
                    <a href="#"><img className="icon" width={31} src="https://cdn-icons-png.flaticon.com/512/2504/2504914.png"></img></a>
                </div>
                <p>New User?<Link to='/signUp'>Sign Up</Link></p>
            </form>

        </div>
    )
}
export default LogBox;
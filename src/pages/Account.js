import React from "react";
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useState,useEffect } from "react";
import './Account.css'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const override = {
    display: "block",
    marginLeft: "45%",
    marginTop:"15%",
  };


const Account=()=>{
    const navigate=useNavigate();
    function handleClick(event){
        event.preventDefault();
        navigate('/home');
    }
    const [loading,setLoading]=useState(false);
    const [color,setColor]=useState("rgba(204, 156, 250, 0.547)")
    useEffect(
        ()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
        },[]
    )
    return(
        loading?(
            <ClimbingBoxLoader
                
                color={color}
                size={15}
                cssOverride={override} 
                loading={loading}
                />
            ):
        <div id="account">
            <Navbar id="nav"></Navbar>
            <div id="Acbox">
                <p id="acTitle">Account Details</p>
                <form id="details" onSubmit={handleClick}>
                    <div id="left">
                        <TextField className="inp" type="text" label="First name" required></TextField>
                        <TextField className="inp" type="text" label="Last name"></TextField>
                        <TextField className="inp" type="number" label="Phone" required></TextField>
                        <TextField className="inp" type="text" label="DoorNo/Apartment No" required></TextField>
                    </div>
                    <div id="right">
                    <TextField className="inp" type="text" label="City/Town/Village" required></TextField>
                    <TextField className="inp" type="text" label="District" required></TextField>
                    <TextField className="inp" type="text" label="State" required></TextField>
                    <Button id="btn" variant="contained" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Account
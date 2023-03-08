import React,{Component} from "react";
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";
import { Button, TextField ,Link} from "@mui/material";
import { useState,useEffect } from "react";
import axios from "axios";
import './SignUp.css'


const override = {
    display: "block",
    marginLeft: "45%",
    marginTop:"15%",
  };


class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            username:'',
            mail:'',
            gender:'',
            pwd:''
        }
    }

    handleIdChange=(event)=>{
        this.setState({id:event.target.value})
    }
    handleNameChange = (event) => {
        this.setState({ username: event.target.value });
      };
    
      handleMailChange = (event) => {
        this.setState({ mail: event.target.value });
      };
    
      handleGenderChange = (event) => {
        this.setState({ gender: event.target.value });
      };
    
      handlePwdChange = (event) => {
        this.setState({ pwd: event.target.value });
      };
      handleSubmit=(event)=>{
        event.preventDefault();
        const data={
          
          id:this.state.id,
          username:this.state.username,
          mail:this.state.mail,
          gender:this.state.gender,
          pwd:this.state.pwd
        }
        axios.post('http://localhost:8080/postUser',data)
        const navigate=useNavigate();
        navigate('/');
      }
      render(){
        return(
            <div>
                <div id="navForLogin">
                <h3>Fash And Style</h3>
                <a href="#" className="help"><p>Need help? </p></a>
            </div>
            <div id="Acbox">
                <p id="acTitle">Create User</p>
                <form id="details" onSubmit={this.handleSubmit}>
                    <div id="left">
                        <TextField className="inp" type="number" label="Enter Id" onChange={this.handleIdChange} value={this.state.id} required></TextField>
                        <TextField className="inp" type="text" label="Username" onChange={this.handleNameChange} value={this.state.username} required></TextField>
                        <TextField className="inp" type="email" label="Email" onChange={this.handleMailChange} value={this.state.mail} required></TextField>
                        
                    </div>
                    <div id="right">
                        
                        <TextField className="inp" type="text" label="Gender" onChange={this.handleGenderChange} value={this.state.gender}></TextField>
                        <TextField className="inp" type="password" label="Password" onChange={this.handlePwdChange} value={this.state.pwd} required></TextField>
                        <Button id="btn" variant="contained" type="submit" >Create Account</Button>
                    </div>
                </form>
            </div>
            </div>
                
    )
      }
    
}

export default SignUp
import React, { Component } from 'react'
import { TextField,Button } from '@mui/material';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Account.css'
export class UpdateClient extends Component {
    constructor(props){
    super(props);
    this.state={
        id:'',
        lastname:'',
        phone:'',
        doorno:'',
        city:'',
        dist:'',
        state:''
    }
}


handleFirstChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleLastChange = (event) => {
    this.setState({ lastname: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleDoorChange = (event) => {
    this.setState({ doorno: event.target.value });
  };

  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  };
  handleDistChange = (event) => {
    this.setState({ dist: event.target.value });
  };
  handleStateChange = (event) => {
    this.setState({ state: event.target.value });
  };


  handleSubmit=(event)=>{
    event.preventDefault();
    const data={

        id:this.state.id,
        lastname:this.state.lastname,
        doorno:this.state.doorno,
        phone:this.state.phone,
        city:this.state.city,
        dist:this.state.dist,
        state:this.state.state
    }

    axios.put('http://localhost:8080/updatePersonal',data)
}
render(){

    return(
        <div id="account">
            <Navbar id="nav"></Navbar>
            <div id="Acbox">
                <p id="acTitle">Account Details</p>
                <form id="details" onSubmit={this.handleSubmit}>
                    <div id="left">
                        <TextField className="inp" type="text" onChange={this.handleFirstChange} value={this.state.id} label="ID" required></TextField>
                        <TextField className="inp" type="text" onChange={this.handleLastChange} value={this.state.lastname} label="Username"></TextField>
                        <TextField className="inp" type="number" onChange={this.handlePhoneChange} value={this.state.phone} label="Phone" required></TextField>
                        <TextField className="inp" type="text" onChange={this.handleDoorChange} value={this.state.doorno} label="DoorNo/Apartment No" required></TextField>
                    </div>
                    <div id="right">
                    <TextField className="inp" type="text" onChange={this.handleCityChange} value={this.state.city} label="City/Town/Village" required></TextField>
                    <TextField className="inp" type="text" onChange={this.handleDistChange} value={this.state.dist} label="District" required></TextField>
                    <TextField className="inp" type="text" onChange={this.handleStateChange} value={this.state.state} label="State" required></TextField>
                    <Button id="btn" variant="contained" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}
}

export default UpdateClient
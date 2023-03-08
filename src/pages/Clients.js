import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Clients.css'
import {Link, useNavigate,Navigate} from "react-router-dom"

import { Button } from '@mui/material';



      
export class Clients extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            phone:'',
            doorno:'',
            city:'',
            dist:'',
            state:''
        }
        
    }

      
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className='crudBtn'>
            <Button id='btnc' onClick={this.handleAdd} className='clientbtn' variant='contained'><Link className='lnk' to='/addClient'>Add Client</Link></Button>
            <Button id='btnc' onClick={this.handleShow} className='clientbtn' variant='contained'><Link className='lnk' to='/getClients'>Show Clients</Link></Button>
            <Button id='btnc' onClick={this.handleUpdate} className='clientbtn' variant='contained'><Link className='lnk' to='/updateClients'>Update Client</Link></Button>
            <Button id='btnc' onClick={this.handleDelete} className='clientbtn' variant='contained'><Link className='lnk' to='/deleteClients'>Delete Client</Link></Button>
        </div>
      </div>
    )
  }
}

export default Clients
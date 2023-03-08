import React ,{useState}from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import './DeleteClient.css'
const DeleteClient=()=> {
    const [item,setSearch]=useState("");
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://localhost:8080/deletePersonal/'+item)
            .then( document.getElementById("display").innerHTML = "Successfully deleted the client details")
            .catch(err=>console.log(err))
        }
    }
  return (
    <div className="deletePage">
        <Navbar></Navbar>
        <div className="del" >
            <TextField type="text" placeholder="ID"  value={item} onChange={e=>setSearch(e.target.value)}
                onKeyPress={searchBook}/>
            <p id="display">Enter the ID of the client to be deleted</p>
        </div>
      
    </div>
  )
}

export default DeleteClient;
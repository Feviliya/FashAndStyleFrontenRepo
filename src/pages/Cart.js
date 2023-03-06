import React,{useState,useEffect} from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import Navbar from '../components/Navbar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Cart.css'
const override = {
    display: "block",
    marginLeft: "45%",
    marginTop:"15%",
  };

const Cart=()=>{
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
        loading ?(
        <ClimbingBoxLoader
            
            color={color}
            size={15}
            cssOverride={override} 
            loading={loading}
            />
        ):
        <div id="cart">
            <Navbar id="cartNav"></Navbar>
            <div className='cartContent'>
                <p id='nothingText'>Nothing in cart for now!!</p>
                <video id='sad' autoPlay loop>
                    <source src='https://cdn-icons-mp4.flaticon.com/512/7158/7158893.mp4' type='video/mp4'></source>
                </video>
                <br></br><br></br>
                <Link id='shop' to="/home">
                    <Button id='btn' variant='contained' >Shop now</Button>
                </Link>
            </div>
        </div>
    )
}
export default Cart
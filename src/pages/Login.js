import React,{useState,useEffect} from "react";
import LogBox from "../components/LogBox";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

import './Login.css'


const override = {
    display: "block",
    marginLeft: "45%",
    marginTop:"15%",
  };
const Login=()=>{
    const [loading,setLoading]=useState(false);
    const color="rgba(204, 156, 250, 0.547)"
    useEffect(
        ()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },4000)
        },[]
    )
    return(
        loading ?(
            <div>
                <ClimbingBoxLoader
        
                color={color}
                size={15}
                cssOverride={override} 
                loading={loading}
                />
            </div>
            ):
        <div id="mainLogin">
            <div id="navForLogin">
                <h3>Fash And Style</h3>
                <a href="#" className="help"><p>Need help?</p></a>
            </div>
            <div className="bgcol">
                <img width={900} height={550} className="bg" src="https://img.freepik.com/free-photo/flat-lay-summer-composition-with-female-accessories-pink-background-copy-space_169016-13075.jpg"></img>
            </div>
            <LogBox id="logBox"></LogBox>
        </div>
    )
}
export default Login;

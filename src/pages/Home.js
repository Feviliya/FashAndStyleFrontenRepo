import React,{useState,useEffect, Component} from "react"
import "./Home.css"
import axios from "axios"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import Product from "../components/Product"
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import {Card,CardMedia,CardContent,Typography,CardActionArea, CardActions,IconButton} from '@mui/material'
import {AddShoppingCart} from '@mui/icons-material'

const override = {
    display: "block",
    marginLeft: "45%",
    marginTop:"15%",
  };


class Home extends Component{
    // const [loading,setLoading]=useState(false);
    // const [color,setColor]=useState("rgba(204, 156, 250, 0.547)");
    
    // const [vals,setData]=useState([])

    // useEffect(()=>{
    //     getDetails();
    // },[])

    // const getDetails=()=>{
    //     axios.get('http://localhost:8080/getClothes')
    //     .then(res=>setData(res.data))
    //     .catch(err=>console.log(err))
    // }

    state = {
        data: []
        }
      
        componentDidMount() {
        axios.get('http://127.0.0.1:8080/getClothes')
          .then(response => {
            this.setState({ data: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      }


    // useEffect(
    //     ()=>{
    //     setLoading(true)
    //     setTimeout(()=>{
    //         setLoading(false)
    //     },3000)
    //     },[]
    // )
    // return(

    //     loading ?(
    //             <ClimbingBoxLoader
    
    //             color={color}
    //             size={15}
    //             cssOverride={override} 
    //             loading={loading}
    //             />
    //         )
    //     :
    //     (
        render(){
            return(

                <div>
                <Navbar></Navbar>
                <div className="products">
                {
                    this.state.data.map(cloth=>(
                        <Card className='product' sx={{ width: 300 , height:310}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="200"
                                image={cloth.imgurl}
                                alt={cloth.brand}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {cloth.brand}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    
                                </Typography>
                                <Typography gutterBottom variant="p" component="div">
                                    {cloth.price}
                                </Typography>
                                <CardActions>
                                    <IconButton id='cartbtn' aria-label="add to favorites">
                                        <AddShoppingCart  className='addtocart'/>
                                    </IconButton>
                                </CardActions>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
                


                    {/* <Product className="product" cloth={data}></Product> */}
                </div>
                </div>
            )
        }
        // )

    // )
    
}
export default Home
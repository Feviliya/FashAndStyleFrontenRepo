import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Product.css'
import {Card,CardMedia,CardContent,Typography,CardActionArea, CardActions,IconButton} from '@mui/material'
import {AddShoppingCart} from '@mui/icons-material'
const Product=(cloth)=>{
    // const [post,setPost]=useState(null);
    // const [notes,getNotes]=useState('');
    // const url="http://localhost:8080/getClothes";
    // useEffect(()=>{
    //     getAllNotes();
    // },[])
    // const getAllNotes=()=>{
    //     axios.get("http://localhost:8080/getClothes").then((response)=>{
    //         const allVals=response.data.post.allVals;
    //         getNotes(allVals);
    //     }).catch(error=>console.error(`Error: ${error}`));
    // }

    return(
        <div>
            {
            cloth.map((item)=>{
                let thumbnail=item.imgurl;
                if(thumbnail!=undefined){
                    return(
                            <Card className='product' sx={{ width: 300 , height:310}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="200"
                                image="thumbnail"
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
                    )
                }
            })
            
            }
        </div>
    )
}
export default Product;
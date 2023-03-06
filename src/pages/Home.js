import React,{useState,useEffect} from "react"
import "./Home.css"
import axios from "axios"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import Product from "../components/Product"
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const override = {
    display: "block",
    marginLeft: "45%",
    marginTop:"15%",
  };



const Home=(props)=>{
    const [loading,setLoading]=useState(false);
    const [color,setColor]=useState("rgba(204, 156, 250, 0.547)");
    
    const notes=props;
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
            )

        :
            
        

            notes.map((note,id) => {
                return(
                    <div className="home">
                    <Navbar id="nav"></Navbar>
                    <br></br>
                        <div className="products">
                            <Product className="product" url={note.imgurl} name={note.brand} price={note.price}></Product>
                        </div>
                    </div>
                )
            })

    )
                {/* <Product className="product" url="https://cdn.shopify.com/s/files/1/0420/0310/3906/products/UK02284_740x.jpg?v=1606122252" name="Vintage Fabric (10meter)" price="Rs.570/-"></Product>
                <Product className="product" url="https://www.bobbin.lk/wp-content/uploads/2019/12/APC-0322.jpg" name="Designer Tool Kit Maxi" price="Rs.2400/-"></Product>
                <Product className="product" url="https://www.craftgully.com/image/cache/catalog/cg2853-kundan-stones-drop-royal-blue-20211005-1000x1000.jpg" name="Kundan Beads (80 pcs)" price="Rs.388/-"></Product>
                <Product className="product" url="https://cdn.shopify.com/s/files/1/0040/0329/9398/products/2_51d81526-2b08-49fe-959d-7304ba8888c5_800x.jpg?v=1642783771" name="Design Lace (10 meter)" price="Rs.137/-"></Product>
                <Product className="product" url="https://m.media-amazon.com/images/I/818MAyMobXL._SY355_.jpg" name="Sewing Thread set" price="Rs.550/-"></Product>
                <Product className="product" url="https://m.media-amazon.com/images/I/71a3M6XZXmL._SL1000_.jpg" name="RhineStone and Pearl" price="Rs.220/-"></Product>
                <Product className="product" url="https://aarimaterials.com/wp-content/uploads/2021/05/Sugar-Beads-Seed-Beads-Gold.jpg" name="Star Sugar Beads" price="Rs.1470/-"></Product>
                <Product className="product" url="https://www.thecreativecurator.com/wp-content/uploads/2021/01/knit-fabric-2-1024x653.jpg" name="Knit fabric (10 meter)" price="Rs.2099/-"></Product>
                <Product className="product" url="https://img1.exportersindia.com/product_images/bc-full/2019/9/6433313/satin-fabric-1569395305-5094249.jpeg" name="Satin Floral Fabric" price="Rs.2788/-"></Product>
                <Product className="product" url="https://m.media-amazon.com/images/I/612hyy3jWqL._SL1200_.jpg" name="25pcs Sewing Needle" price="Rs.700/-"></Product>
                <Product className="product" url="https://m.media-amazon.com/images/I/51rxWCro2oL._AC_SS450_.jpg" name="Blouse Hooks(25 pieces)" price="Rs.99/-"></Product>
                <Product className="product" url="https://images.meesho.com/images/products/118399141/e6aej_512.jpg" name="Ethnic Saree belt" price="Rs.338/-"></Product>
                <Product className="product" url="https://rukminim1.flixcart.com/image/416/416/ktop5e80/saree-fall/6/f/h/large-12-saree-falls-ridhi-collection-original-imag6yex5wz4pabd.jpeg?q=70" name="Cotton Blend Saree Falls" price="Rs.458/-"></Product>
                <Product className="product" url="https://www.shopolics.com/uploads/images/full/Peach-Pink-and-Green-Floral-Organza-Silk-Fabric-22104.jpg" name="Organze Floral fabric" price="Rs.938/-"></Product>
                <Product className="product" url="https://m.media-amazon.com/images/I/71YC1Tvw1WL._SL1080_.jpg" name="Castle Fabric Paint" price="Rs.5032/-"></Product> */}

            
    
}
export default Home
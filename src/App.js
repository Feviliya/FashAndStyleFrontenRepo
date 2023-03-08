import React,{useState,useEffect} from 'react';
import Login from './pages/Login'
// import Home from './pages/Home';
import Cart from './pages/Cart'
import Account from './pages/Account'
import {Routes,Route} from 'react-router-dom'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import Clients from './pages/Clients';
import GetClients from './pages/GetClients';
import UpdateClient from './pages/UpdateClient';
import DeleteClient from './pages/DeleteClient';



const override = {
  display: "block",
  marginLeft: "45%",
  marginTop:"15%",
};

function App() {
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


  return (
    <div className="App">
      {
        loading ?(
          
        <ClimbingBoxLoader

          color={color}
          size={15}
          cssOverride={override} 
          loading={loading}
        />)

        :
        (

            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/addClient' element={<Account/>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/signUp' element={<SignUp></SignUp>}></Route>
              <Route path='/clients' element={<Clients></Clients>}></Route>
              <Route path='/getClients' element={<GetClients></GetClients>}></Route>
              <Route path='/updateClients' element={<UpdateClient></UpdateClient>}></Route>
              <Route path='/deleteClients' element={<DeleteClient></DeleteClient>}></Route>
            </Routes>
        )
      }

    </div>
  );
}

export default App;

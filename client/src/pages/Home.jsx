import React from 'react'
import Navbar from '../components/NavBar/Navbar.components';
import LoginModel from '../components/LoginModel/Loginmodel.components'


import { useState } from "react";

import { useCookies } from "react-cookie";

const Home = () => {

   const [ showModel ,setShowModel ] =useState(false);
   const [ isSignUp , setIsSignUp ] = useState(true);
   const [ cookies ,setCookies, removeCookies] = useCookies("User");


  const authToken= cookies.AuthToken;

  const createHandleClick =()=>{


    setShowModel( true);
    setIsSignUp(true);
  }

  return (
    <div className="w-full h-full fixed 
     bg-[url('./Image/6e9794bcedeecf5a8f8f41338a2a7345.webp')] b-gradient-to-t from-white to-black
     ">
       
       <Navbar/>
       <div className=" absolute flex-col  text-center mt-40 z-50">
         <h1 className="text-9xl font-bold px-10 py-8 text-white">Start something epic .</h1>

         <button 
         onClick={createHandleClick}
         className="font-bold rounded-full py-4 px-20 text-white bg-red-500  text-1xl bg-gradient-to-r from-pink-600 to-red-500" >{authToken?"signout":"create account"}</button>

         <LoginModel  setShowModel={setShowModel} isSignUp={isSignUp}/>
       </div>



    </div>
  
       
  
  )
}

export default Home
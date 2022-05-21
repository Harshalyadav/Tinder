import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";

const LoginModel = ({setShowModel , isSignUp })=>{

     const [email , setEmail] = useState(null);
     const [password ,setPassword] = useState(null);
     const [confirmPassword ,setConfirmPassword] =useState(null);
     const [error ,setError] = useState(null);

     const [cookies ,setCookies ,removeCookies] = useCookies(null);

     const handelClick =()=>{
           setShowModel(false);
     };

     const handelSubmit=()=>{

     };
 
    return (
        <>
               <div className="absloute h-600 my-auto mx-auto top-8 right-0 left-0 p-10 max-w-prose bg-white">
                   <div className="float-right">
                       <h2 onClick={handelClick} className="">ⓧ</h2>
                       <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>

                       <form onSubmit={handelSubmit}
                       className="">

                           <input 
                              type ="email"
                              id="email"
                              name="email"
                              placholder="email"
                              required= {true}
                              onChange={(e)=> setEmail(e.target.value)}
                           />

                           <input 
                               type ="password"
                               id ="password"
                               name ="password"
                               placeholder="password"
                               required= {true}
                               onChange={(e)=>setPassword(e.target.value)}
                           />
                           <input 
                              type = "password"
                              id = "password-confirm"
                              name = "password-confirm"
                              placeholder = "confirm-password"
                              required= {true}
                              onChange= {(e)=>setConfirmPassword(e.target.value)}
                           
                           />
                           <input  
                                type="submit"
                                className=""
                           
                           /> 
                           <p> {error} </p>
                            
                        
                       </form>
                        <h2> Get the App </h2>                       
                   </div>

               </div>


        </>
    );
};

export default LoginModel ;
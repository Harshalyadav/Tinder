import React from "react";
import { useState } from "react";
import { useCookie } from "react-cookie";

const LoginModel = ({setShowModel , isSignUp })=>{

     const [email , setEmail] = useState(null);
     const [password ,setPassword] = useState(null);
     const [confirmPassword ,setConfirmPassword] =useState(null);
     const [error ,setError] = useState(null);

    //  const [cookies ,setCookie ,removeCookies]=useCookie(null);

     const handelClick =()=>{
           setShowModel(false);
     };

     const handelSubmit=(e)=>{
         e.preventDefault();
         try{
             if(isSignUp && password !== confirmPassword)
             {
                 setError("password need to match");
                 return ;
             }

            
            // setCookie('AuthToken', response.data.token)
            // setCookie('UserId', response.data.userId)

         }
         catch(error){
             console.log(error.message);
         };

     };
 
    return (
        <>      
               <div className=" relative w-full  h-full">     
                         <div className="absloute h-600  m-auto top-2 right-0 left-0 p-10 max-w-prose bg-white">
                   
                       <div onClick={handelClick} className="float-right text-5xl  p-2 hover:cursor-pointer">ⓧ</div>

                       <h2 className="text-3xl text-gray-800 m-2">{isSignUp ? 'CREATE ACCOUNT': 'LOG IN'}</h2>
                       <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>

                       <form onSubmit={handelSubmit}
                       className=" flex flex-col p-4 m-4">

                           <input 
                              type ="email"
                               className="m-2 p-2 text-md focus:outline-none"
                              name="email"
                             placeholder="abcd@email.com"
                              required= {true}
                              onChange={(e)=> setEmail(e.target.value)}
                           />

                           <input 
                               type ="password"
                               id ="password"
                               className="m-2 p-2 text-md focus:outline-none"
                               name ="password"
                               placeholder="password"
                               required= {true}
                               onChange={(e)=>setPassword(e.target.value)}
                           />
                          { isSignUp && <input 
                              type = "password"
                              id = "password-confirm"
                              className="m-2 p-2 text-md  focus:outline-none"
                              name = "password-confirm"
                              placeholder = "confirm-password"
                              required= {true}
                              onChange= {(e)=>setConfirmPassword(e.target.value)}
                           
                           />}
                           <input  
                                type="submit"
                                className=" text-gray-600 text-md font-semibold px-2 py-4 rounded-md border-solid border-2 border-gray-500 m-4 hover:text-gray-800 hover:border-gray-800
                                hover:border-2
                                hover:border-solid"
                           
                           /> 
                           <p> {error} </p>
                            
                        
                       </form>
                       <hr/>
                        <h2 className="m-3 text-lg"> Get the App </h2>                       
                   </div>

               
                   </div>


        </>
    );
};

export default LoginModel ;
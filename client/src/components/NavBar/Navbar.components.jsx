import React from 'react'
import Whitelogo from "../../Image/tinder_logo_white.png";
import Colorlogo from "../../Image/color-logo-tinder.png";

const Navbar = ({authToken, setShowModal,minimal, setIsSignUp, showModal}) => {

  const clickHandler = () => {

       setIsSignUp(false);
       setShowModal(true);

  }

  return (
    <>
    <nav className=" flex items-center py-4 px-10 justify-between   ">
      <div className="flex p-4 gap-10 items-center">
         <div className="w-40 ">
           <img

              src= { minimal ? Colorlogo : Whitelogo }
              alt ="tinder logo"
              className="w-full h-full"
           />
          </div>
             <div className="text-xl gap-8 text-white flex  p-2">
             <button className="font-bold hover:text-red-500">Products</button>
             <button className="font-bold hover:text-red-500">Learn</button>
             <button className="font-bold hover:text-red-500">Safty</button>
             <button className="font-bold hover:text-red-500">Support</button>
             <button className="font-bold hover:text-red-500">Download</button>
             </div>
             
           </div>
        
 
         { 
           !authToken && !minimal &&(
            <button 
            onClick={clickHandler}
            disabled={showModal}
            className=" py-2 px-8 text-red-500 text-2xl font-semibold rounded-md bg-gray-200">
              Login
            </button>
           )

         }
      
    </nav>
    
    </>


  )
}

export default Navbar
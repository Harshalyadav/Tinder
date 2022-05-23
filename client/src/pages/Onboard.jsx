import React,{useState} from 'react';
import Navbar from '../components/NavBar/Navbar.components';
import {useCookies} from "react-cookie";



const Onboard = () => {
   const [cookie ,setCookies ,removeCookies] = useCookies(null)
  const [formData , setFormData] =useState({
    first_name :" ",
    user_Id : " cookie.UserId",
    dob_month:"",
    dob_day:"",
    dob_year : "",
    show_gender :false,
    gender_identity : "man",
    gender_interest : "woman",
    url: "",
    about: "",
    matchs : []

    
  })

  const changeHandler =(e)=>{
     const value = e.target.type ==="checkbox" ? e.target.checked : e.target.value;

     const name= e.target.name
     setFormData((prevState)=>({
        ...prevState,
        [name]:value
     }))
      
  }

  const submitHandler = ()=>{
              
      
}
  return (
  <>
  
     <Navbar minimal={true} setShowModal={()=>{ 

     }}  showModal={false} />

           <div className
           ="border-2 border-gray-200 border-solid">
               <h1>Enter Your Details</h1>
                  <form onSubmit={submitHandler}
                        className="flex justify-center flex-row"
                  >
                     <section className="flex flex-col p-5 w-30 text-left">
                        <label className="mr-2.5 my-1 "
                        HtmlFor="first_name">First Name</label>
                        <input 
                        className="border-gray-200 rounded-md border-solid border-2 px-12 py-2 mr-2.5  text-lg focus:outline-none " 
                        type="text" 
                        name="first_name"
                        id ="first_name"
                        placeholder="First Name"
                        required= {true}
                        vlaue ={formData.first_name}
                        onChange= {changeHandler}
                          />

                  <label className="mr-2.5 my-2 ">BirthDay</label>

                  <div className="flex flex-row ">

                  <input
                  className="  border-gray-200  rounded-md border-solid border-2 px-2 py-2 mr-2.5  text-md appearance-none focus:outline-none w-20 "
                  name="dob_day"
                  type = "number"
                  id =" dob_day"
                  placeholder="Day"
                  value = {formData.dob_day}
                  onChange= {changeHandler}

                  />
                  <input 
                  className="border-gray-200 rounded-md border-solid border-2 px-2 py-2 mr-2.5 text-md focus:outline-none  w-20 appearance-none"
                  name="dob_month"
                  id="dob_month"
                  type = "number"
                  placeholder="Month"
                  vlaue ={formData.dob_month}
                  onChange= {changeHandler}
                  />
                  <input 
                  className="border-gray-200 rounded-md border-solid border-2 px-2 w-20 py-2 mr-2.5 text-md focus:outline-none"
                  name="dob_year"
                  id="dob_year"
                  type = "number"
                  placeholder="Year"
                  vlaue ={formData.dob_year}
                  onChange= {changeHandler}
                  />
                  </div>

                  <label className="mr-2.5 my-2">Gender</label>

                  <div className="flex flex-row ">
                    <input
                    className="border-gray-200 rounded-md border-solid border-2 px-12 py-2 mr-2.5 my-0 text-lg focus:outline-none w-1/4 appearance-none hidden"
                    id="man-gender-identity"
                    type = "radio"
                    name= "gender-identity"
                    value="man"
                    checked={formData.gender_identity === "man"}
                    onChange={changeHandler}
                    />
                    <label className="p-2.5 border-2 border-solid border-gray-500 rounded-md ease-in duration-300 mr-2.5"
                    HtmlFor="man-gender-identity">Man</label>

                    <input 
                    className="border-gray-200 hidden w-1/4 rounded-md border-solid border-2 px-12 py-2 mx-2.5 my-0 mr-2.5 text-lg focus:outline-none appearance-none"
                    id="woman-gender-identity"
                    type="radio"
                    name ="gender-identity"
                    vlaue = "woman"
                    checked={formData.gender_identity === "woman"}
                    onChange = {changeHandler}
                    />
                    <label className="p-2.5 border-2 border-solid border-gray-500 rounded-md ease-in duration-300 mr-2.5" HtmlFor="woman-gendr-identity">woman</label>

                    <input 
                    className="border-gray-200 rounded-md border-solid border-2 px-12 py-2 mr-2.5 my-0 text-lg w-1/4 focus:outline-none appearance-none hidden"
                       id="more-gender-identity"
                       name="gender-identity"
                       type="radio"
                       vlaue="more"
                       checked={formData.gender_identity === "more"}
                       onChange = {changeHandler}
                    />
                    <label className="p-2.5 border-2 border-solid border-gray-500 rounded-md ease-in duration-300 mr-2.5"
                    HtmlFor="more-gender-identity">more</label>
                  </div>

        {/* .......... Show gender ...............  */}

        <label className="mr-2.5 my-2" HtmlFor="show-gender">Show  gender on my profile</label>


        <input
        className="border-gray-200 rounded-md border-solid border-2 px-12 py-2 mr-2.5 my-0 text-lg focus:outline-none "
            id="show-gender"
            name="show-gender"
            type="checkbox"
            checked={formData.show_gender}
            onChange ={changeHandler}
        
        />
        <label className="mr-2.5 my-2">Show me</label>
          
        <div className="flex flex-row  appearance-none"
         
        >
          
          
           <input
               className="hidden"
               id="man-gender-interest"
               name="gender-interest" 
               type= "radio"
               value="man"
               checked={formData.gender_interest === "man"}
               onChange ={changeHandler}
           />
           <label className="p-2.5 border-2 border-solid border-gray-500 rounded-md ease-in duration-300 mr-2.5" HtmlFor="man-gender-interest">Man</label>

           <input
             className="hidden"
            id="woman-gender-interest" 
            name="gender-interest"
            type= "radio"
            value="woman"
            checked = {formData.gender_interest === "woman"}
            onChange = {changeHandler}

            />
            <label className="p-2.5 border-2 border-solid border-gray-500 rounded-md ease-in duration-300 mr-2.5"
            HtmlFor="woman-gender-interest">Woman</label>

            <input
                 className="hidden"
                id="everyone-gender-interest "
                name="gender-interest"
                type="radio"
                vlaue ="everyone"
                checked={formData.gender_interest === "everyone"}
                onChange = {changeHandler}
              />
              <label className="p-2.5 border-2 border-solid border-gray-500 rounded-md ease-in duration-300 mr-2.5" HtmlFor="everyone-gender-interest">Everyone</label>
        </div>
        
            {/* ...... about me... */}
           <label className="mr-2.5 my-2" HtmlFor="about">about me</label>
        <input 
         className="border-gray-200 rounded-md border-solid border-2 px-12 py-2 mr-2.5 my-1 text-lg focus:outline-none appearance-none"
        type="text" 
        name="about"
        id="about"
        placeholder="I like gym.."
        value = {formData.about}
        onChange={changeHandler}
        />
        
        <input className="border-gray-200 rounded-md border-solid border-2 px-12 py-2 mr-2.5 my-1 text-lg focus:outline-none hover:bg-submitColorHover-200 active:bg-submitColorActive-200 appearance-none" type="submit"/>


           </section>

           <section className="flex flex-col p-5 text-left w-30">

              <label className="mr-2.5 my-1"
              HtmlFor="url">Profil Picture</label>
              <input 
                  className="border-gray-200 rounded-md border-solid border-2 px-12 py-2 mr-2.5 my-0 text-lg focus:outline-none appearance-none"
                  
                 id="url"
                 name="url"
                 type="url"
                 required ={true}
                 onChange={changeHandler}
              />

              <div className="">
                 {formData.url && <img 
                  src={formData.url}
                  alt ="profile pic"
                  className="w-full"
                 />}
              </div>

           </section>

                  </form>

           </div>
     </>
  )
}


export default Onboard
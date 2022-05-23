import React,{useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import {useCookies} from "react-cookie";



const Dashboard = () => {
 
  const [user ,setUser] =useState(null);
  const [genderedUser ,setGenderedUsers] =useState(null);
  const [lastDirection , setLastDirection] = useState();
  const [cookies ,setCookies,removeCookies] = useCookies(['user'])

  const userId = cookies.UserId;

  // const getUser =async()=>{
  //   console.log("www")

  // }

  // const getGenderedUser = async()=>{

  // }

  // useEffect(()=>{
  //   getUser
  // },[]);

  // useEffect(()=>{
  //   if(user){
  //     getGenderedUser
  //   }
  // },[user])

     const swiped = ()=>{
        setLastDirection();
     }

     const outOfFrame = (name)=>{
      console.log(name + ' left the screen!')

     }




  return (
    <>
    {
      user && 
      <div>
        <div>
          <div>
          <TinderCard
                                className="swipe"
                                key={genderedUser.user_id}
                                onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                                onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}>
                                <div
                                    style={{backgroundImage: "url(" + genderedUser.url + ")"}}
                                    className="card">
                                    <h3>{genderedUser.first_name}</h3>
                                </div>
                            </TinderCard>
                            <div>
                              {lastDirection ? <p> you swiped {lastDirection}</p>: <p/>}
                            </div>
          </div>
        </div>
      </div>
    }
     
          

    </>
  );
};

export default Dashboard;
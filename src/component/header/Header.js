import React, { useState } from 'react'
import './Header.css';
import { Link } from "react-router-dom"
import {BsFillSunFill } from "react-icons/bs"



const Header = () => {

   const [mode, setMode] = useState("");
     function changeMode() {
      if (mode===1) {
         setMode(0);
         document.body.style.backgroundColor = "black";
         document.getElementById("icon").style.color = "white";
      }
      else {
         setMode(1);
         document.body.style.backgroundColor = "white"
         document.getElementById("icon").style.color = "black"
   
      }
   }
  return (
    <div >
         <div className='container'>
              <span className='name' >Entertainment</span>
              <ul>
                <Link className='link' to="/"><li> Trending</li></Link>
                <Link className='link' to="/movies"><li> Movies</li></Link>
                <Link className='link' to="/series"><li> TvShow </li></Link>
                <Link className='link' to="/search"><li> Search</li></Link>
               <li id="icon" onClick={()=>changeMode()}><BsFillSunFill/></li>
              </ul>
         </div>
    </div>
  )
}

export default Header

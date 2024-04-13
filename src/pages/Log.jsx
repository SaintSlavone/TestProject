import React from 'react';
import image1 from "../image1.png";
import {Link} from "react-router-dom";

export default function Log(){
  return (
    <>
      <div className="container">
            <Link className='returnButton' to="/">Return</Link>
            <form className='form' action="">
                <label htmlFor="">Login form</label>
                <img src={image1} alt="user_image" />
                <input type="text" placeholder='login' required />
                <input type="password" placeholder='password' required />
                <button type='submit'>Send</button>
                <p className='formP'>Doesn't have an accout?<Link to="/register">Register</Link></p>
            </form>
      </div>
    </>
  );
};

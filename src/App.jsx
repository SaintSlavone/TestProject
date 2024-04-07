import React from 'react'
import image1 from "./image1.png"

export default function App() {
  /*const mysql = require('mysql');

  const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test_db",
    password: ""
  });

  conn.connect(err => {
    if(err){
      console.log(err);
      return err;
    }else{
      console.log("Database ------ OK");
    }
  });*/
  return (
    <>
    <div className='container'>
      <form className='form' action="">
        <label htmlFor="">Registration form</label>
        <img src={image1} alt="user_image" />
        <input type="text" placeholder='login' required />
        <input type="password" placeholder='password' required />
        <input type="password" placeholder='confirm password' required />
        <button type='submit'>Send</button>
      </form>
    </div>
    </>
  )
}

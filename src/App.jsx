import React from 'react'
import image1 from "./image1.png"

export default function App() {
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
        /*huy */
      </form>
    </div>
    </>
  )
}

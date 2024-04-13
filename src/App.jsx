import React from 'react';
import {Link} from 'react-router-dom';

export default function App(){
  return (
    <>
      <div className="container">
        <h1 className='h1'>Test Project</h1>
        <div className="wrapper">
          <Link className='linkButton' to="/register">Registration</Link>
          <Link className='linkButton' to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};
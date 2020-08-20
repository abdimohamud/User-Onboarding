import React from 'react';

function Form ({details}) {

    return(
    <div className='friend container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>username: {details.username}</p>
      <p>password: {details.password}</p>
    </div>
    )
}

export default Form;
import React, { Component } from 'react';

export default class Login extends Component {


  render() {

    let inputStyle = {
      borderRadius: '3px',
      padding: '1rem',
      margin: '1rem',
      width: '40%',
    }

    return(
      <div className='Login'>
        <h1 style={{textAlign: "center"}}>Login Component</h1>

        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <input style={inputStyle} type='text' name='firstName' placeholder='First Name'/>
          <input style={inputStyle} type='text' name='lastName' placeholder='Last Name'/>
          <input style={inputStyle} type='email' name='email' placeholder='Email'/>
          <input style={inputStyle} type='password' name='password' placeholder='Password'/>
          <button style={{width: '10%', borderRadius: '3px', margin: '1rem', padding: '0.5rem 1rem'}} type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

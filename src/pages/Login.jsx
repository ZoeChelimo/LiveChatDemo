import React from 'react'

const Login = () => {
  return (
    <div className='login template d-flex justify-content-centre align-items-centre 100-w 100-vh bg-primary'>
      <form>
        <h3>Log in</h3>
        <div className='mb-2' >
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Enter Email' className='form-control'/>
        </div>
        <div className='mb-2'>
          <label htmlFor='passoword'>Password</label>
          <input type='password' placeholder='Enter Password' className='form-control'/>
        </div>
        <div className='mb-2'>
          <input type='checkbox' className='custom-control custom checkbox' id='check'/>
         <label htmlFor='check' className='custom-input-label'>
            Remember me
         </label>
        </div>
        <div className='d-grid'>
          <button className='btn btn-primary'>Log in</button>
        </div>

      </form>
      
    </div>
  )
}

export default Login

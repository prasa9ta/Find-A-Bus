import React from 'react'

const Error = () => {
  return (
    <>
        <div className='error'>
            <div className='error-code'><h1>404</h1></div>
            <div className='error-para'>This page is currently not Available</div>
            <a href='/'>Home Page</a>
        </div>
    </>
  )
}

export default Error

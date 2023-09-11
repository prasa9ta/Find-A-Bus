import React from 'react'
// import signuplogo from '../images/signuptrans.png'
const Signup = () => {
  return (
    <>
      <section className='signup'>
        <div className='container'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>Signup</h2>
              <form className='registration-form' id='registration-form'>
                <div className='form-group'>
                  <label htmlFor='name'>
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type='text' name='name' id='name' autoComplete='off' placeholder='Your name'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>
                    <i class="zmdi zmdi-email material-icons-email"></i>
                  </label>
                  <input type='email' name='email' id='email' autoComplete='off' placeholder='Your email'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='phone'>
                    <i class="zmdi zmdi-phone-in-talk material-icons-phone"></i>
                  </label>
                  <input type='number' name='phone' id='phone' autoComplete='off' placeholder='Your Phone Number'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='name'>
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type='text' name='name' id='name' autoComplete='off' placeholder='Your name'/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup

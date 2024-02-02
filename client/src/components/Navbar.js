import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'



const Navbar = () => {
  // const nevigate = useNavigate();
  const [tougleButton, setToggleButton] = useState(true);


//   const callAboutPage = async () => {
//     try {
//         const res = fetch('/about', {
//             mathod: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json"
//             },
//             credentials: "include"
//         });

//         const data = await res.json;
//         console.log(data);
//         if (!res.status === 200) {
//             const error = new Error(res.error);
//             throw error;
//         }
//         setToggleButton(false);

//     } catch (err) {
//         console.log(err);
//         // nevigate('/');
//     }
// }


// useEffect(() => {
//     callAboutPage();
// }, []);

 

  return (
    <>
      <div className='navbar'>
        <div className='nav-logo'>
          <img width={200} src={logo} alt='pras' />
        </div>

        <div className='nav-title'>
          <h2>Yatra Sukhad Hoi</h2>
        </div>
        {tougleButton ?

          <div className='nav-items'>

            <ul><a href='/' >Home</a></ul>
            <ul><a href='/report' >Report</a></ul>
            <ul><a href='/signup' >Login</a></ul>

          </div>
          :
          <div className='nav-items'>

            <ul><a href='/' >Home</a></ul>
            <ul><a href='/add' >Add a Route</a></ul>
            <ul><a href='/report' >Report</a></ul>
            {/* <ul><a onClick={logout} style={{"cursor":'pointer'}} >Logout</a></ul> */}
            <ul><a href='/logout' >Logout</a></ul>

          </div>
        }
      </div>
    </>
  )
}

export default Navbar
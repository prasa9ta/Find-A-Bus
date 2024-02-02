import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Signup = () => {

  const nevigate = useNavigate();
  const [toggleButton,setToggleButton] = useState(false);
  const [name,setName] = useState("");
  const [gender,setGender] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [cpassword,setcPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

// signup form submission
  const signupFormSubmit = async(event)=>{
    event.preventDefault();

    if(!name || !gender || !phone || !email || ! password || !cpassword){
      console.log("please fill all the fields");
      window.alert("please fill all the fields");
      return;
    }
    if (passwordsMatch) {
      // Passwords match, proceed with your registration logic
      window.alert("Registration successful!");
      console.log('Registration successful!');
    } else {
      // Passwords do not match, provide feedback to the user
      window.alert("Passwords do not match!");
      console.error('Passwords do not match!');
      return;
    }

    const res = await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,gender,email,phone,password
      })
    });
    
    if(res.status===201){
      console.log("registarion successfull");
      setToggleButton(false);
    }else{
      console.log("registraion failed");
    }
    
  };

  // sign in form submission
  const signinFormSubmit = async(event)=>{
    event.preventDefault();

    if(!email || !password){
      window.alert("fill all the details !");
      return;
    }

    const res = await fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    });
    
    const data = await res.json();
    if(res.status===400 || !data){
      console.log("error");
    }else{
      window.alert("login successfull");
      nevigate('/');
    }

  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Check if passwords match whenever the password is changed
    setPasswordsMatch(event.target.value === cpassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setcPassword(event.target.value);
    // Check if passwords match whenever the confirm password is changed
    setPasswordsMatch(password === event.target.value);
  };



  return (
    <>
      {toggleButton?
      <div className="signup">
        <h3>signup</h3>
        <form >
            <label htmlFor="name">Name : 
                <input type="text" className='username' id='username' value={name} placeholder='name' onChange={(event)=>setName(event.target.value)} />
            </label><br/>
            <label htmlFor="gender">Gender :
            <input type="radio" name="gender" id="male" value="male" checked={gender === 'male'} onChange={(event) => setGender(event.target.value)} />Male
            <input type="radio" name="gender" id="female" value="female" checked={gender === 'female'} onChange={(event) => setGender(event.target.value)} /> Female
            </label><br/>
            <label htmlFor="email">Email : 
                <input type="email" placeholder='email' id='email' value={email} onChange={(event)=>setEmail(event.target.value)} />

            </label><br/>
            <label htmlFor="phone">Phone : 
                <input type="tel" placeholder='phone' id='phone' value={phone} onChange={(event)=>setPhone(event.target.value)}/>
            </label><br/>
            <label htmlFor="password">Password : 
                <input type="password" placeholder='password' id='password' value={password} onChange={handlePasswordChange}/>
            </label><br/>
            <label htmlFor="cpassword">Confirm Password : 
                <input type="password" placeholder='confirm password' id='cpassword' value={cpassword} onChange={handleConfirmPasswordChange}/>
            </label><br/>
            <button type="submit" onClick={signupFormSubmit}>Submit</button>
        </form>
        <p>Already have an account? <button onClick={() => setToggleButton(false)} style={{background:"none", color:"blue",fontSize:"1.2rem", fontWeight:"600"}}>Sign In</button></p>
      </div>
      :
      <div className="signin">
       <h3>Sign In</h3>
        <form >
            <label htmlFor="username">Username :
                <input type="text" id="usernamel" name="username" placeholder="username or email" onChange={(event)=>setEmail(event.target.value)} required />
            </label>
            <label htmlFor="password">Password :
                <input type="password" id="passwordl" name="password" placeholder="Enter your password" onChange={(event)=>setPassword(event.target.value)} required />
            </label>
            <button type="submit" onClick={signinFormSubmit}>Sign In</button>
        </form>
        <p>Don't have an account? <button onClick={() => setToggleButton(true)} style={{background:"none", color:"blue",fontSize:"1.2rem", fontWeight:"600"}}>Sign Up</button></p>
      </div>
      }
    </>
  )
}

export default Signup

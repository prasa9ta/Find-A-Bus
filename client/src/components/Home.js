import React, { useState } from 'react'
import BusList from '../Busses/BusList';
// import BusList from './Bus-List';

const Home = () => {
  
  const [source,setSource] = useState("");
  const [destination,setDestination] = useState("");
  const [tougleButton,setTougleButton] = useState(true);
  const [results,setResults] = useState([]);
  
  const PostData = async(e)=>{
    e.preventDefault();
    const res = await fetch('/search',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        source,destination
      })
    });
    
    const result = await res.json();
    
    if(result.busses)
    setResults([...result.busses]);
    
    
    if(result.status === 422 || !result){
      window.alert("No Bus found");
      console.log("No bus found");
    }else{
      // console.log(results);
      
      setTougleButton(false);
      results.map((bus)=>console.log(bus.name));
    }

  }

  

  return (
    <>
      <div className='home-container'>
        <div className='home-search-box'>
          <div className='home-route'>
            <div className='home-route-search'>
              <div className='home-source'>
                <input type='text' name='source' id='source' placeholder=' Source' value={source} onChange={(event)=>setSource(event.target.value)}></input>
              </div>
              <div className='source-to-destination'><p>TO</p></div>
              <div className='home-destination'>
                <input type='text' name='destination' id='destination' placeholder=' Destination' value={destination} onChange={(event)=>setDestination(event.target.value)}></input>
              </div>
            </div>
          </div>

          <div className='home-search-button'><button onClick={PostData}>Search</button></div>
        </div>
        {
        tougleButton?
        <div><h3>List of Busses</h3></div>
        :
        < BusList results = {results} source = {source} />
        }
      </div>
    </>
  )
}

export default Home
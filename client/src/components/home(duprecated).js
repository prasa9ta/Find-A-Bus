import React, { useState } from 'react'
import Bus from '../Busses/Bus'
import BusList from '../Busses/BusList';

const Home = () => {
  
  const [source,setSource] = useState("");
  const [destination,setDestination] = useState("");
  
  
  const search=(elem)=>{
    let count = 0;
    let rut = elem.route;
    let n =rut.length;

    for(var v = 0;v<n;v++){
      if(rut[v].place.toUpperCase()===source.toUpperCase()){
        count = count+1;
      }
      else if(rut[v].place.toUpperCase()===destination.toUpperCase()){
        count = count+1;
      }
    }
    if(count === 2){
      console.log(elem);
      return elem;
    }
  }
      
  const results = Bus.filter((elem)=>search(elem));
  console.log("/////////");
  console.log(results);
  console.log("......");
  console.log(Bus)



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

          <div className='home-search-button'><button >Search</button></div>
        </div>

        < BusList results = {results} destination = {destination}/>
      </div>
    </>
  )
}

export default Home

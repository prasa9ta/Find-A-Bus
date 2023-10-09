import React, { useState } from 'react'

const Home = () => {
  
  const [source,setSource] = useState("");
  const [destination,setDestination] = useState("");
  

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

          <div className='home-search-button'><button>Search</button></div>
        </div>

        {/* < BusList results = {results}/> */}
      </div>
    </>
  )
}

export default Home

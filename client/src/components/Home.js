import React from 'react'

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='home-search-box'>
          <div className='home-route'>
            <div className='home-route-search'>
              <div className='home-source'>
                <input type='text' name='source' id='source' placeholder=' Source'></input>
              </div>
              <div className='source-to-destination'><p>TO</p></div>
              <div className='home-destination'>
                <input type='text' name='destination' id='destination' placeholder=' Destination'></input>
              </div>
            </div>
          </div>

          <div className='home-search-button'><button type="submit">Search</button></div>
        </div>

        <div className='home-bus-list'>
          <p>Create a table here for appearence of the list of busses</p>
          <div className='bus-list'>
            <div className='bus-name'></div>
            <div className='bus-time'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

import React from 'react'
import "../App.css"

const BusList = ({results}) => {
  return (
    <>
      <div className='home-bus-list'>
          { results.map((bus)=>{
            return(
              <div className='bus-list' key={bus.number}>
                <div className='bus-list-child'>
                  <span className='bus-name'> Bus:</span>
                  <span className='bus-deperture-time'>{bus.name}</span>
                </div>
                <div className='bus-list-child'>
                  <span className='bus-deperture-time'>Time:</span>
                  <span className='bus-arival-time'> 12:10</span>
                  </div>
              </div>
            )
          }) }
        </div>
    </>
  )
}

export default BusList

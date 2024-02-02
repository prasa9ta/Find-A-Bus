import React from 'react'
import "../App.css"

const BusList = (props) => {
  const results = props.results;
  const source = props.source;
  console.log(source);
  console.log(results);
  return (
    <>   
      <div className='home-bus-list'>
          { results.map((bus)=>{
            return(
              <div className='bus-list' key={bus.busName}>
                <div className='bus-list-child'>
                  <span className='bus-name'> Bus:</span>
                  <span className='bus-deperture-time'>{bus.busName}</span>
                </div>
                <div>
                  <span className='bus-deperture'>{source}</span>
                </div>
                <div className='bus-list-child'>
                  <span className='bus-deperture-time'>Time:</span>
                  <span className='bus-arival-time'>{bus.timingAtSource || '--:--'}</span>
                  </div>
              </div>
            )
          }) }
        </div>
    </>
  )
}

export default BusList
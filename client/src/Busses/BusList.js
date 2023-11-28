import React from 'react'
import "../App.css"

const BusList = (props) => {
  const results = props.results;
  const source = props.source;
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
                <div>
                  <span className='bus-deperture'>{bus.route.find((obj) => obj.place === source)?.place}</span>
                </div>
                <div className='bus-list-child'>
                  <span className='bus-deperture-time'>Time:</span>
                  <span className='bus-arival-time'>{bus.route.find((obj) => obj.place === source)?.time || '--:--'}</span>
                  </div>
              </div>
            )
          }) }
        </div>
    </>
  )
}

export default BusList
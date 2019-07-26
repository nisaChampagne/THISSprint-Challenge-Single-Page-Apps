import React from 'react'

export default function LocationCard (props) {


  return (
    <span className='location-card'>
      <h3>{props.name}</h3>
      <h4>Type: {props.type}</h4>
      <p>Dimension: {props.dimension}</p>
    </span>
  );
}


  // {locations.map(location => (
  //             <LocationCard 
  //             name={location.name}
  //             type={location.type}
  //             dimension={location.dimension}
  //             residents={location.residents}/>
  //           ))}
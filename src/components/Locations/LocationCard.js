import React from 'react'
import { Card } from 'semantic-ui-react'


export default function LocationCard (props) {

  return (
    <Card
    header={props.name}
    meta={props.type}
    description={props.dimension} />
  );
}


  // {locations.map(location => (
  //             <LocationCard 
  //             name={location.name}
  //             type={location.type}
  //             dimension={location.dimension}
  //             residents={location.residents}/>
  //           ))}
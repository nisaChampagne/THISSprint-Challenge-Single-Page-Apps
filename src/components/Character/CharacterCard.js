import React from 'react'
import { Card } from 'semantic-ui-react'


export default function CharacterCard (props) {

  return (

    <Card
    image={props.img} alt='rick and morty characters'
    header={props.name}
    meta={props.status}
    description={props.species} 
    extra={props.gender}/>
  // <span className='character-card'>
  //   <img src={props.img} alt='rick and morty character'/>
  //   <h2 className='character-name'>{props.name}</h2>
  //   <p>Status: {props.status}</p>
  //   <p>Species: {props.species}</p>
  //   <p>Gender: {props.gender}</p>
  //   <p>ID: {props.number}</p>
  // </span>
  );
}

// img={episode.image}
//               species={episode.species}
//               name={character.name}
//               status={episode.alive}
//               number={episode.id}
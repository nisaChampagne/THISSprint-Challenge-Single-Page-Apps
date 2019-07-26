import React from 'react'
import { Card } from 'semantic-ui-react'


export default function CharacterCard (props) {

  return (
    <Card className='character-card'
    image={props.img} alt='rick and morty characters'
    header={props.name}
    meta={props.status}
    description={props.species} 
    extra={props.gender}/>
  );
}

// img={episode.image}
//               species={episode.species}
//               name={character.name}
//               status={episode.alive}
//               number={episode.id}
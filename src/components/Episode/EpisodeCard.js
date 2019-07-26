import React from 'react'
import { Card } from 'semantic-ui-react'


export default function EpisodeCard (props) {

  return (
    <Card
    header={props.name}
    meta={props.number}
    description={props.airDate} />
//   <span className='episode-card'>
//       <h3>{props.name}</h3>
//       <h4>Episode number: {props.number}</h4>
//       <p>Air Date: {props.airDate}</p>
//   </span>
  );
}

// {episodes.map(episode => (
//     <EpisodeCard 
//     key={episode.id}
//     episode={episode}
//     name={episode.name}
//     airDate={episode.air_date}
//     number={episode.id} />
//   ))}

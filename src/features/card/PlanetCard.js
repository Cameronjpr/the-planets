import React, { useRef, useEffect } from 'react';
import {StyledCard, PlanetOrb} from './PlanetCard.styled'

export default function PlanetCard(props) {
  const { name, color, description, days, dist, focused } = props
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current && focused) {
      console.log(focused, myRef.current)
      myRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  });

  
  
  return (
    <StyledCard ref={myRef}>
      <h1 style={{color: color}}>{name}</h1>
      <PlanetOrb src={process.env.PUBLIC_URL + `/img/${name}.png`}/>
      <p>{description}</p>
      {days && dist &&
        <p>
          <ul>
            <li>Days to orbit: {days}</li>
            <li>Distance to sun: {dist}</li>
          </ul>
        </p>
      }
      
    </StyledCard>
  );
}

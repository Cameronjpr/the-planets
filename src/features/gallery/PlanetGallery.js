import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCard,
} from '../cards/cardSlice'
import { StyledGallery } from './PlanetGallery.styled'
import PlanetCard from '../card/PlanetCard'
import { planets } from "../../data/data"
import PlanetPaginator from "../pagination/PlanetPaginator"

const PlanetGallery = () => {
  const card = useSelector(selectCard);

  return (
    <main>
      <StyledGallery className={"scroller"}>
        { planets.map((planet, idx) => (
            <PlanetCard 
              key={idx}
              name={planet.name} 
              color={planet.color} 
              days={planet.revolutionPeriod}
              dist={planet.distToSun}
              focused={card === planet.id}
            />
          )
        )}
      </StyledGallery>
      <PlanetPaginator current={card}/>
    </main>
  );
}

export default PlanetGallery;
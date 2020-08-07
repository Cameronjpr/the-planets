import React from 'react';
import { planets } from "../../data/data"
import { useSelector, useDispatch } from 'react-redux';
import {
  setValue,
  selectCard,
} from '../cards/cardSlice'; 
import {PlanetOrbSmall} from '../card/PlanetCard.styled'
import { Paginator, PaginationItem } from "./PlanetPaginator.styled" 

export default function PlanetPaginator(props) {
  const { current } = props;
  console.log(current)
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(setValue(id))
  }

  return (
    <nav>
      <Paginator>
        {planets.map(planet => (
          <PaginationItem>
            <button
              key={planet.id}
              onClick={() => handleClick(planet.id)}>
              <PlanetOrbSmall alt={`The planet ${planet.name}`} src={process.env.PUBLIC_URL + `/img/${planet.name}.png`}/>
            </button>
          </PaginationItem> 
        )
        )}
      </Paginator>
    </nav>
  );
}

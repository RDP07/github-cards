import React from 'react';
import Cards from './Cards'

const CardList = (props) => {
  return (
    <div>
      { props.cards.map(card => <Cards key={ card.id } {...card} /> )}
    </div>
  );
}

export default CardList

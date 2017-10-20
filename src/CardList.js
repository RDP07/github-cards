import React, { Component } from 'react';
import Cards from './Cards'
import data from './data'

const CardList = (props) => {
  return (
    <div>
      { props.cards.map(card => <Cards key={ card.id } {...card} /> )}
    </div>
  );
}

export default CardList

import React, { Component } from 'react';
import CardList from './CardList'
import Cards from './Cards'

// <Form onSubmit={ this.addNewCard }/>

class App extends React.Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    console.log(cardInfo)
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }))
    
  }

  render () {
    return (
      <div>
        
        <CardList cards={ this.state.cards } />
      </div>
    );
  }
}

export default App



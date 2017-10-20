import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Cards from './Cards'
import CardList from './CardList'
import Form from './Form'



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
        <Form onSubmit={ this.addNewCard }/>
        <CardList cards={ this.state.cards } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

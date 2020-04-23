import React, { Component } from 'react';
import MainTemplate from './templates/MainTemplate';
import MainView from './views/MainView';

class App extends Component {
  state = {
    result: 'Siema',
  };

  render() {
    const { result } = this.state;

    return (
      <MainTemplate>
        <MainView>
          <h3>{result}</h3>
          <p> siema siema</p>
        </MainView>
      </MainTemplate>
    );
  }
}

export default App;

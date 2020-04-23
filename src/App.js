import React, { Component } from 'react';
import MainTemplate from './templates/MainTemplate';
import MainView from './views/MainView';
import Input from './components/atoms/Input/Input';

class App extends Component {
  state = {
    result: '',
  };

  handleChange = (e) => {
    this.setState({ result: e.target.value });
  };

  render() {
    const { result } = this.state;

    return (
      <MainTemplate>
        <MainView>
          <h1>Your URL:</h1>
          <h3>Wynik to: {result}</h3>
          <Input type="text" value={result} onChange={this.handleChange} />
          <Input />
          <Input />
          <Input />
          <Input />
        </MainView>
      </MainTemplate>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Controls from './Controls';
import Display from './Display';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Display />

        <Controls />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Controls from './Controls';
import Display from './Display';
import ZingTouch from 'zingtouch';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  rotatefun(props) {
    // var containerElement = document.getElementById('controls-container');
    var myElement = document.getElementById('circular-container');
    var zt = new ZingTouch.Region(myElement);
    let angle=0;
    zt.bind(
      myElement,
      'rotate',
      function (e) {
        angle+=e.detail.angle;
        console.log('##### -', e.detail.angle);
      },
      false
    );
  }

  render() {
    return (
      <div className='App'>
        <Display />

        <Controls rotate={this.rotatefun} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Controls extends Component {
  render(props) {
    return (
      <div className='controls-container'>
      <div className='circular-container'>
        <div className='btn-menu'>Menu</div>
        <div className='btn-prev'>prev</div>
        <div className='btn-next'>next</div>
        <div className='btn-play'>play/pause</div>
       
      </div>
      <div className='btn-press'></div>
      </div>
    );
  }
}

export default Controls;

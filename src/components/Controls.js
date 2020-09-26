import React, { Component } from 'react';

class Controls extends Component {
  render(props) {
    return (
      <div className='controls-container'>
        <div
          className='circular-container'
          id='circular-container'
          onMouseOver={this.props.rotate}
        >
          <div className='btn-menu' onClick={this.props.menuback}>
            Menu
          </div>
          <div className='btn-prev'>prev</div>
          <div className='btn-next'>next</div>
          <div className='btn-play'>play/pause</div>
        </div>
        <div className='btn-press' onClick={this.props.musicMenufun}></div>
      </div>
    );
  }
}

export default Controls;

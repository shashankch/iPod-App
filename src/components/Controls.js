import React, { Component } from 'react';

// component for controls button container
class Controls extends Component {
  render(props) {
    return (
      // circular region container with event listener
      //container for buttons-press/play/prev/next.
      <div className='controls-container'>
        <div
          className='circular-container'
          id='circular-container'
          onMouseOver={this.props.rotate}
        >
       
          <div className='btn-menu' onClick={this.props.menuback}>
            MENU
          </div>
          <div className='btn-prev'>
            <img
              alt=''
              height='25px'
              width='25px'
              src='https://www.flaticon.com/svg/static/icons/svg/153/153756.svg'
            />
          </div>
          <div className='btn-next'>
            <img
              alt=''
              height='25px'
              width='25px'
              src='https://www.flaticon.com/svg/static/icons/svg/153/153757.svg'
            />
          </div>
          <div className='btn-play'>
            <img
              alt=''
              height='20px'
              width='20px'
              src='https://www.flaticon.com/svg/static/icons/svg/153/153752.svg'
            />
            <img
              alt=''
              height='20px'
              width='20px'
              src='https://www.flaticon.com/svg/static/icons/svg/1214/1214679.svg'
            />
          </div>
        </div>
        <div className='btn-press' onClick={this.props.musicMenufun}></div>
      </div>
    );
  }
}

export default Controls;

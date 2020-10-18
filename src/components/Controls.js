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
            MENU
          </div>
          <div className='btn-prev'>
            <img
              height='25px'
              width='25px'
              src='https://www.flaticon.com/svg/static/icons/svg/153/153756.svg'
            />
          </div>
          <div className='btn-next'>
            <img
              height='25px'
              width='25px'
              src='https://www.flaticon.com/svg/static/icons/svg/153/153757.svg'
            />
          </div>
          <div className='btn-play'>
            <img
              height='20px'
              width='20px'
              src='https://www.flaticon.com/svg/static/icons/svg/153/153752.svg'
            />
            <img
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

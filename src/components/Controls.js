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
          <div className='btn-prev'>
          <img height='30px' width='30px'  src='https://www.flaticon.com/svg/static/icons/svg/26/26309.svg'/>
          </div>
          <div className='btn-next'>
            <img height='30px' width='30px'  src='https://www.flaticon.com/svg/static/icons/svg/26/26309.svg'/>
          </div>
          <div className='btn-play'>
          <img height='30px' width='30px'  src='https://www.flaticon.com/svg/static/icons/svg/26/26309.svg'/>
          </div>
        </div>
        <div className='btn-press' onClick={this.props.musicMenufun}></div>
      </div>
    );
  }
}

export default Controls;

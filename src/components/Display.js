import React, { Component } from 'react';

class Display extends Component {
  render(props) {
    return (
      <div className='display-container'>
        <div className='display-menu-container'>
          <div className='menu-container'>
            <ul className='main-options-list'>
              <span className='title'>Main Menu</span>
              <li className='active-tab'>Cover Flow</li>
              <li>Music</li>
              <li>Games</li>
              <li>Settings</li>
            </ul>
          </div>

          <div className='music-menu-container'>
            <ul className='music-options-list'>
              <span className='title'>Music</span>
              <li className='active-tab'>All Songs</li>
              <li>Artists</li>
              <li>Albums</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;

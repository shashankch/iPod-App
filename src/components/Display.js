import React, { Component } from 'react';

class Display extends Component {
  render(props) {
    return (
      <div className='display-container'>
        <div className='menu-container'>
          <ul>
            <li>Cover Flow</li>
            <li>Music</li>
            <li>Games</li>
            <li>Settings</li>
          </ul>
        </div>

        <div className='music-menu-container'>
          <ul>
            <li>All Songs</li>
            <li>Artists</li>
            <li>Albums</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Display;

import React, { Component } from 'react';

class Display extends Component {
  render(props) {
    const { main, cover, music, games, settings } = this.props.values;
    const { active, songs, albums } = music;
    return (
      <div className='display-container'>
        {main ? (
          <div className='display-menu-container'>
            <ul className='main-options-list'>
              <span className='title'>Main Menu</span>
              <li className={cover ? 'active-tab' : ''}>Cover Flow</li>
              <li className={active ? 'active-tab' : ''}>Music</li>
              <li className={games ? 'active-tab' : ''}>Games</li>
              <li className={settings ? 'active-tab' : ''}>Settings</li>
            </ul>
          </div>
        ):
         (
          <div className='music-menu-container'>
            <ul className='music-options-list'>
              <span className='title'>Music</span>
              <li className={songs ? 'active-tab' : ''}>All Songs</li>

              <li className={albums ? 'active-tab' : ''}>Albums</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Display;

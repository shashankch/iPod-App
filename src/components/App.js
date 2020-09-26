import React, { Component } from 'react';
import Controls from './Controls';
import Display from './Display';
import ZingTouch from 'zingtouch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      main: true,
      cover: false,
      music: {
        active: false,
        select: false,
        songs: false,
        albums: false,
      },
      games: false,
      settings: false,
    };
  }

  rotatefun = (props) => {
    // console.log(this);
    // var containerElement = document.getElementById('controls-container');
    var myElement = document.getElementById('circular-container');
    var zt = new ZingTouch.Region(myElement);
    let dist = 0;

    zt.bind(myElement, 'rotate', (e) => {
      dist += e.detail.distanceFromLast;
      console.log(dist);

      if (this.state.main) {
        if ((dist >= 0 && dist < 30) || (dist < 0 && dist > -30)) {
          this.setState({
            main: true,
            cover: true,
            music: {
              active: false,
              songs: false,
              albums: false,
            },
            games: false,
            settings: false,
          });
        } else if ((dist >= 30 && dist < 60) || (dist <= -30 && dist > -60)) {
          this.setState({
            main: true,
            cover: false,
            music: {
              active: true,
              select: false,
              songs: false,
              albums: false,
            },
            games: false,
            settings: false,
          });
        } else if ((dist >= 60 && dist < 90) || (dist <= -60 && dist > -90)) {
          this.setState({
            main: true,
            cover: false,
            music: {
              active: false,
              select: false,
              songs: false,
              albums: false,
            },
            games: true,
            settings: false,
          });
        } else if (
          (dist >= 90 && dist <= 120) ||
          (dist <= -90 && dist >= -120)
        ) {
          this.setState({
            main: true,
            cover: false,
            music: {
              active: false,
              select: false,
              songs: false,
              albums: false,
            },
            games: false,
            settings: true,
          });
        }
      } else if (this.state.music.select) {
        if ((dist >= 0 && dist < 30) || (dist < 0 && dist > -30)) {
          this.setState({
            main: false,
            cover: false,
            music: {
              active: true,
              select: true,
              songs: true,
              albums: false,
            },
            games: false,
            settings: false,
          });
        } else if ((dist >= 30 && dist < 60) || (dist <= -30 && dist > -60)) {
          this.setState({
            main: false,
            cover: false,
            music: {
              active: true,
              select: true,
              songs: false,
              albums: true,
            },
            games: false,
            settings: false,
          });
        }
      }
    });
  };

  musicMenufun = (props) => {
    console.log('clicked');
    const { active } = this.state.music;
    if (active) {
      this.setState({
        main: false,
        cover: false,
        music: {
          active: true,
          select: true,
          songs: false,
          albums: false,
        },
        games: false,
        settings: false,
      });
    }
  };

  menuback=(props)=>{

    

  }

  render() {
    return (
      <div className='App'>
        <Display values={this.state} />

        <Controls
          rotate={this.rotatefun}
          values={this.state}
          musicMenufun={this.musicMenufun}
          menuback={this.menuback}
        />
      </div>
    );
  }
}

export default App;

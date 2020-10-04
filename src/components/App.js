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
    //console.log('clicked');
    const { cover, music, games, settings } = this.state;
    if (music.active) {
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

      const bgr = document.getElementById('bgr');
      bgr.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')";
      if (music.songs) {
        console.log('inside music song');
        const bgr = document.getElementById('bgr');
        bgr.style.backgroundImage =
          "url('https://images.pexels.com/photos/5077423/pexels-photo-5077423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
      }
      if (music.albums) {
        const bgr = document.getElementById('bgr');
        bgr.style.backgroundImage =
          "url('https://images.unsplash.com/photo-1535992165812-68d1861aa71e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=637&q=80')";
      }
    } else if (cover) {
      this.setState({
        main: false,
        cover: false,
        music: {
          active: false,
          select: false,
          songs: false,
          albums: false,
        },
        games: false,
        settings: false,
      });
      const bgr = document.getElementById('bgr');
      bgr.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')";
    } else if (games) {
      this.setState({
        main: false,
        cover: false,
        music: {
          active: false,
          select: false,
          songs: false,
          albums: false,
        },
        games: false,
        settings: false,
      });

      const bgr = document.getElementById('bgr');
      bgr.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1556084123-fe76122cd5d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80')";
    } else if (settings) {
      this.setState({
        main: false,
        cover: false,
        music: {
          active: false,
          select: false,
          songs: false,
          albums: false,
        },
        games: false,
        settings: false,
      });
      const bgr = document.getElementById('bgr');
      bgr.style.backgroundImage =
        "url('https://images.pexels.com/photos/270700/pexels-photo-270700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
    }
  };

  menuback = (props) => {
    console.log('clicked');
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
      settings: false,
    });
    const bgr = document.getElementById('bgr');
    bgr.style.backgroundImage = '';
  };

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

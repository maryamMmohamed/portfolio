import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../../src/App.css';

class LandingPage extends Component {

    render() {
  
      return (
        <div style={{width:'100%', margin:'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img src='https://images.vexels.com/media/users/3/130536/isolated/preview/ca1b35be1e7c32a0dda6b935fed08231-girl-face-silhouette-3-by-vexels.png' alt='avatar' 
                className='avatar-img'
              />
              <div className='banner-text'>
                <h1>Frontend Web Developer</h1>
                <hr/>
                <p>HTML | CSS | SASS | Bootstrap | JavaScript | JQuery | React | API | Ajax</p>
                <div className='social-links'>
                  <a href='https://www.linkedin.com/in/maryammohamedamin' target='_blank' rel='noopener noreferrer'>
                    <i  className="fab fa-linkedin" rel='noopener noreferrer'></i>
                  </a>
                  <a href='https://github.com/maryamMmohamed' target='_blank' rel='noopener noreferrer'>
                    <i  className="fab fa-github-square" rel='noopener noreferrer'></i>
                  </a>
                  <a href='https://www.behance.net/maryam_mohd4ce' target='_blank' rel='noopener noreferrer'>
                    <i  className="fab fa-behance-square" rel='noopener noreferrer'></i>
                  </a>
                  <a href='https://www.facebook.com/profile.php?id=100010911585398' target='_blank' rel='noopener noreferrer'>
                    <i  className="fab fa-facebook-square" rel='noopener noreferrer'></i>
                  </a>
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      )
    }
  
  }
  
  export default LandingPage;
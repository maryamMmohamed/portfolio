import React, { Component } from 'react';
import { Grid, Cell , List , ListItem ,ListItemContent } from 'react-mdl';

class Contact extends Component {

    render() {
  
      return (
        <div className="contact-body">
          <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Mariam Mohamed</h2>
                <img src='https://images.vexels.com/media/users/3/130536/isolated/preview/ca1b35be1e7c32a0dda6b935fed08231-girl-face-silhouette-3-by-vexels.png' alt='avatar' 
                style={{height:'250px'}}/>
                <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Front-end developer / UI developer looking for opportunity to
                gain knowledge and experience with an organization that
                can utilize my skills.</p>
              </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>
                <div className='contact-list'>
                  <List>
                    <ListItem>
                      <ListItemContent icon="phone" style={{fontSize:'25px;'}}>+201111111111</ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent icon="email">Maryammohamed9596@gmail.com</ListItemContent>
                    </ListItem>
                    {/* <ListItem>
                      <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                    </ListItem> */}
                  </List>
                </div>
              </Cell>
          </Grid>
        </div>
      )
    }
  
  }
  
  export default Contact;
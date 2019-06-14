import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {

    render() {
  
      return (
        <div className="resume">
          <Grid className="demo-grid-3">
              <Cell col={4} className='resume-left-col'>
                <div style={{textAlign:'center'}}>
                    <img src='https://images.vexels.com/media/users/3/130536/isolated/preview/ca1b35be1e7c32a0dda6b935fed08231-girl-face-silhouette-3-by-vexels.png' alt='avatar' 
                    style={{height:'200px'}}/>
                </div>
                <h2 style={{paddingTop:'2em'}}>Mariam Mohamed</h2>
                {/* <h4 style={{color:'grey'}}>Frontend Developer</h4>
                <hr style={{width:'50%',borderTop:'3px solid #833fb2'}}/> */}
                <p>Front-end developer / UI developer looking for opportunity to
                gain knowledge and experience with an organization that
                can utilize my skills.
                </p>
                <hr style={{width:'50%',borderTop:'3px solid #833fb2'}}/>
                <h5>Address</h5>
                <p>Elrayan, Maadi, Egypt</p>
                <h5>Phone</h5>
                <p>+20 01111111111</p>
                <h5>Email</h5>
                <p>maryammohamed9596@gmail.com</p>
                {/* <h5>Web</h5>
                <p>mywebsite.com</p> */}
                <hr style={{width:'50%',borderTop:'3px solid #833fb2'}}/>
              </Cell>
              <Cell col={8} className='resume-right-col'>

                <h2>Education</h2>
                <Education startYear={2018} 
                  endYear={2019}
                  schoolName='Information Technology Institute(ITI)'
                  schoolDescription='9 Month Professional Diploma Of Enterprise & Web Apps Development (Microsoft) Track,
                  Information Technology Institute(ITI), Smart Village Branch, Giza, Egypt.'
                />
                <Education startYear={2014} 
                  endYear={2017}
                  schoolName='Computers and information faculty'
                  schoolDescription="Bachelor's Degree Of Computer and Information, Computer Science (CS) Department, Faculty Of Benha, Benha
                  University, Benha, Egypt <br/>Cummulative Grade: Very Good"
                />

                <hr style={{borderTop:'3px solid #e22947'}}/>

                <h2>Experience</h2>
                <Experience startYear={'Sept'} 
                  endYear={2018}
                  jobName='Front-end Developer'
                  jobDescription="Trainee As Front-end Developer, Huawei Company, Smart Village Branch, Giza, Egypt."
                />
                <Experience startYear={'Aug'} 
                  endYear={2018}
                  jobName='UI Developer'
                  jobDescription='UI Developer, MultiMega Company, Maadi, Egypt.'
                />
                <Experience startYear={'Feb 2018'} 
                  endYear={'May 2018'}
                  jobName='Front-end Developer'
                  jobDescription='Front-end Developer/ UI Developer, Codex-Global Company, Maadi, Egypt.'
                />

                <hr style={{borderTop:'3px solid #e22947'}}/>

                <h2>Skills</h2>
                <Skills skill='HTML'
                  progress={90} />
                <Skills skill='CSS'
                  progress={90} />
                  <Skills skill='sass'
                  progress={90} />
                  <Skills skill='bootstrap'
                  progress={90} />
                  <Skills skill='javaScript'
                  progress={50} />
                  <Skills skill='jquery'
                  progress={50} />
                  <Skills skill='react'
                  progress={50} />
                  <Skills skill='ajax'
                  progress={50} />
                  <Skills skill='api'
                  progress={50} />
                  <Skills skill='agile'
                  progress={70} />
                  <Skills skill='git'
                  progress={70} />
                  <Skills skill='wireframe'
                  progress={50} />
                  <Skills skill='adobeXD'
                  progress={50} />
              </Cell>
          </Grid>
        </div>
      )
    }
  
  }
  
export default Resume;
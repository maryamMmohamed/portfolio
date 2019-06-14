import React, { Component } from 'react';
import { Tab , Tabs , Grid , Cell , Card , CardTitle , CardText , CardActions , CardMenu , IconButton , Button } from 'react-mdl';


class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className='projects-grid'>
            {/* project 1 */}
          <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
                React Project #1
              </CardTitle>
              <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>
           {/* project 2 */}
          <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
                React Project #2
              </CardTitle>
              <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>
           {/* project 3 */}
          <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
                React Project #3
              </CardTitle>
              <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>
        </div>

      )
    }
    else if(this.state.activeTab === 1){
      return(
        <div className='projects-grid'>
            {/* project 1 */}
          <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}}>
                Bootstrap Project #1
              </CardTitle>
              <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>
           {/* project 2 */}
          <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}}>
                Bootstrap Project #2
              </CardTitle>
              <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>
           {/* project 3 */}
          <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}}>
                Bootstrap Project #3
              </CardTitle>
              <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>
        </div>
      )
    }
    else if(this.state.activeTab === 2){
      return(
        <div>
          <h1>this is HTML</h1>
        </div>
      )
    }
  }

    render() {
  
      return (
        <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>Html</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                      <div className='content'>
                         {this.toggleCategories()}
                      </div>
                    </Cell>
                </Grid>
        </div>   
      )
    }
  
  }
  
  export default Projects;
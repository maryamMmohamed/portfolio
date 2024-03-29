import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout , Header ,Drawer, Navigation, Content} from 'react-mdl';
// components
import Main from './components/main';


class App extends Component {

  render() {

    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{color:'white'}} to='/'>MyPortfolio</Link>} scroll>
                <Navigation>
                    <Link to='/resume'>Resume</Link>
                    {/* <Link to='/aboutme'>About Me</Link> */}
                    <Link to='/projects'>Projects</Link>
                    <Link to='/contact'>Contact</Link>
                </Navigation>
            </Header>
            <Drawer className="header-color" title={<Link style={{color:'white'}} to='/'>MyPortfolio</Link>}>
                <Navigation>
                    <Link to='/resume'>Resume</Link>
                    {/* <Link to='/aboutme'>About Me</Link> */}
                    <Link to='/projects'>Projects</Link>
                    <Link to='/contact'>Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
      </div>
    )
  }

}

export default App;

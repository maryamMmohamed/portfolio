import React from 'react';
import { Switch , Route} from 'react-router-dom';
// components
import LandingPage from './landingpage';
import Projects from './projects';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';


const Main = () => {
    return(
        <Switch>
            <Route exact path='/' component={LandingPage}></Route>
            <Route exact path='/aboutme' component={AboutMe}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/projects' component={Projects}></Route>
            <Route exact path='/resume' component={Resume}></Route>
            <Route exact path='/**' component={LandingPage}></Route>
        </Switch>
    )
}

export default Main;
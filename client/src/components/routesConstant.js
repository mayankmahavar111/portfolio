import {React} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Style from '../style/App.css';
import Header from './header';
import Portfolio from './portfolio';

export default function RouteConstant() {
    // console.log("inside route constant");
    const headingUrl = [
      {
        title : "Home",
        path : '/'
      },
      {
        title : "About me",
        path : '/about'
      },
      {
        title : "Contact",
        path : '/contact'
      }
    ]
    return (
      <div className={Style.route}>
        <Router>
          <div>
            <Header 
              navItem = {headingUrl}
            />
            <Switch>
              <Route exact path="/">
                <Portfolio />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
}
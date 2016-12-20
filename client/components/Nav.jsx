'use strict'

import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';


export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }

  }

  reRouteAddWeight() {
    return (
      <Link to='/lifting'>Weight Lifting</Link>
    )
  }

  reRouteAddRun() {
    return (
      <Link to='/running'>Running</Link>
    )
  }

  render() {
    return (
      <div>
        <div className="container-fullwidth">
          <nav className="navbar navbar-default navbar-static purple">
            <div className="navbar-header">
              <Link to='/'><img className="logo" src="../../assets/kf.png"/></Link>
            </div>
              {/* This is where we could add dynamic user login status
            <div className="navbar-right text-white">User</div>*/}
            <button type="button" className="btn btn-default btn-lg navbutton-right">
              {this.reRouteAddWeight()}
            </button>
            <button type="button" className="btn btn-default btn-lg navbutton-rightright">
              {this.reRouteAddRun()}
            </button>
          </nav>
        </div>
      </div>
    )
  }
}

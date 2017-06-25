import React, { Component } from 'react';
import './side-nav.css';

class SideNav extends Component {
  render() {
    return (
      <aside className="sideNav">
        <h3>JavaScript</h3>
        <h3>Node.js</h3>
        <h3>React/Redux</h3>
        <h3>Rest API</h3>
      </aside>
    );
  }
}

export default SideNav;

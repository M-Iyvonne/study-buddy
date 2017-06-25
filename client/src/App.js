import React, { Component } from 'react';
import './App.css';

import SideNav from './components/side-nav';
import Video from './components/video';
import StudyNotes from './components/studyNotes';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header> <h1>Study Assist</h1> </header>
        <SideNav />
        <Video />
        <StudyNotes />
      </div>
    );
  }
}

export default App;

// Import dependencies.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import components.
import TrackerForm from './components/form/index.jsx';
import TrackerTimer from './components/timer/index.jsx';

// Export scene.
export default

class Tracker extends React.Component{
  render(){
    return(
      <div>
        <TrackerForm />
        <TrackerTimer />
      </div>
    );
  }
}
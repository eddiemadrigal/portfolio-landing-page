import React from 'react';
import { connect } from 'react-redux';
import './App.css';

// import components
import ProjectCard from "./components/projects/ProjectCard";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    // insert state ie. tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // insrt actions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

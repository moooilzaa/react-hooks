import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReducerHook from './components/reducerhooks'
import CustomHooks from './components/customhooks'
import Todo from './components/todo'
import WindowSize from './components/windowsize'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='d-flex'>
          <div className='app1 w50'><Todo /></div>
          <div className='app2 w50'><ReducerHook /></div>
        </div>
        <div className='d-flex'>
          <div className='app3 w50'><CustomHooks /></div>
          <div className='app3 w50'><WindowSize /></div>
        </div>
          
        
        
      </React.Fragment>
      
    );
  }
}

export default App;

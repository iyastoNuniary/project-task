import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = [
      {
        title: 'Video 1',
        url: 'https://mystorage/video1.jpeg'
      },
      {
        title: 'Video 2',
        url: 'https://mystorage/video2.jpeg'
      },
      {
        title: 'Video 3',
        url: 'https://mystorage/video3.jpeg'
      }
    ]
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" components={{content: Task1}} render={props => <Task1 dataProps={data} />} />
          <Route path="/task2" components={{content: Task1}} render={props => <Task2 dataProps={data} />}/>
          <Route path="/task3" component={Task3}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Main from './Main/main';
import Footer from './Footer/footer';

 class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Main />
        <Footer/>
      </>
    )
  }
 }
export default App;

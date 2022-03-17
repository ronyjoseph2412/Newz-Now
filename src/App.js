import './App.css';
import React, {Component } from 'react'
import Navbar from './Components/Navbar';
import News  from './Components/News';
import { Footer } from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: ("Light"),
      progress:0,
      Toggle : (current_mode) => {
        // False is for Switching on ==> Dark Mode
        // console.log(current_mode)
        if (current_mode === true) {
          this.setState({mode:'Light'})
        }
        else {
          this.setState({mode:'Dark'})
          // element=(document.getElementById('main-html'));
          
        }
      }
    }
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  api = process.env.REACT_APP_NEWS_API;
  pageSize = 16;
  render() {
    return (
      <>
      <Router>
        <Navbar mode={this.state.mode} Toggle={this.state.Toggle} />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={2} 
        className='drop-shadow shadow-white'
      />
        <Routes>
          <Route exact path="/" element={<News api={this.api} setProgress={this.setProgress} key="general" country = {'in'} category={'general'} pageSize={this.pageSize}/>} /> 
          <Route exact path="/business" element={<News api={this.api} setProgress={this.setProgress} key="business" country = {'in'} category={'business'} pageSize={this.pageSize}/>} />
          <Route exact path="/entertainment" element={<News api={this.api} setProgress={this.setProgress} key="entertainment" country = {'in'} category={'entertainment'} pageSize={this.pageSize}/>} />
          <Route exact path="/health" element={<News api={this.api} setProgress={this.setProgress} key="health" country = {'in'} category={'health'} />} pageSize={this.pageSize}/>
          <Route exact path="/science" element={<News api={this.api} setProgress={this.setProgress} key="science" country = {'in'} category={'science'} pageSize={this.pageSize}/>} />
          <Route exact path="/sports" element={<News api={this.api} setProgress={this.setProgress} key="sports" country = {'in'} category={'sports'} pageSize={this.pageSize}/> }/>
          <Route exact path="/technology" element={<News api={this.api} setProgress={this.setProgress} key="technology" country = {'in'} category={'technology'} pageSize={this.pageSize}/>} />
        </Routes>
        {/* <News api={this.api} setProgress={this.setProgress} key="" country = {'in'}/> */}
        <Footer />
        </Router>
      </>
    )
  }
}




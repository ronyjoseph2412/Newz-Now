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
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: ("Light"),
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

    this.componentDidMount = async () => {
      
    }
  }

  render() {
    return (
      <>
      <Router>
        <Navbar mode={this.state.mode} Toggle={this.state.Toggle} />
        
        <Routes>
          <Route exact path="/" element={<News key="general" country = {'in'} category={'general'} />} /> 
          <Route exact path="/business" element={<News key="business" country = {'in'} category={'business'} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" country = {'in'} category={'entertainment'} />} />
          <Route exact path="/health" element={<News key="health" country = {'in'} category={'health'} />} />
          <Route exact path="/science" element={<News key="science" country = {'in'} category={'science'} />} />
          <Route exact path="/sports" element={<News key="sports" country = {'in'} category={'sports'} /> }/>
          <Route exact path="/technology" element={<News key="technology" country = {'in'} category={'technology'} />} />
        </Routes>
        {/* <News key="" country = {'in'}/> */}
        <Footer />
        </Router>
      </>
    )
  }
}




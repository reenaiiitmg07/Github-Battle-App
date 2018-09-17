import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import User from './components/user'
class App extends Component {
  constructor(props){
    super();

    this.homeButton=this.homeButton.bind(this);
    this.githubBattle=this.githubBattle.bind(this);
    this.gitPopular=this.gitPopular.bind(this);
  }

  homeButton(){

  }
  githubBattle(){

  }
gitPopular(){

}
  render() {
    return (
      <div className="App">
      <div className="row">
      <button className="btn"> <Link to='/'>Home</Link></button>
      <button className="btn">  <Link to='/battle'>battle</Link></button>
      <button className="btn">  <Link to='/popular'>Popular</Link></button>
      </div>
      <div className="row">
      <p>Github Battle: Battle your friends... and stuff.</p>
       <button classsName="btn" onClick={this.githubBattle}>Battle</button>
      </div>
      </div>
    );
  }
}

export default App;

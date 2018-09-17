import React, { Component } from 'react';
import axios from 'axios';
class User extends Component {
  constructor(props){
    super();
    this.state={
      userName:null,
      userName1:null,
      userImage1:null,
      userName2:null,
      userImage2:null,
      userData:null,
      userflow1:null,
      userflow2:null

    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmitone=this.handleSubmitone.bind(this);
    this.handleSubmittwo=this.handleSubmittwo.bind(this);
    console.log("constructor of user");
  }
  handleChange(e){
    //console.log(e.target.value);
    let username=e.target.value;
    this.setState({userName:username})

  }
  handleSubmitone(e){
    e.preventDefault();
    let username=this.state.userName;
    axios.get("https://api.github.com/users/"+username).then(res=>{
      console.log(res);
        this.setState({
          userData:res.data,
          userImage1:res.data.avatar_url,
          userName1:res.data.login
        })
    })
    .catch(err=>{
      console.log(err);
    });
  }
  handleSubmittwo(e){
    e.preventDefault();
    let username=this.state.userName;
    axios.get("https://api.github.com/users/"+username).then(res=>{
      console.log(res);
        this.setState({
          userData:res.data,
          userImage2:res.data.avatar_url,
          userName2:res.data.login
        })
    })
    .catch(err=>{
      console.log(err);
    });
  }
  render() {
    let img1=this.state.userImage1;
    let img2=this.state.userImage2;
    let Data=this.state.userData;
    console.log("render of uuser called");
    console.log(Data);
    return (

    <div className="row">
            <form onSubmit={this.handleSubmitone}>
            <label> playerone: <input type="text" name="user" onChange={this.handleChange} /> </label>
            <input type="submit" value="Submit" />
           </form>
           <form onSubmit={this.handleSubmittwo}>
           <label> playertwo: <input type="text" name="user" onChange={this.handleChange} /> </label>
           <input type="submit" value="Submit" />
           </form>
      {img1?<img src={img1}/>:null}
      {img2?<img src={img2}/>:null}

    </div>

    );
  }
}

export default User;

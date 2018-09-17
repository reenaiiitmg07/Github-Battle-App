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
      userflow2:null,
      winner:0

    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmitone=this.handleSubmitone.bind(this);
    this.handleSubmittwo=this.handleSubmittwo.bind(this);
    this.resetHandle=this.resetHandle.bind(this);
     this.compareUser=this.compareUser.bind(this);
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
          console.log(res.data);
	  this.setState({
          userData:res.data,
          userImage1:res.data.avatar_url,
          userName1:res.data.login,
          userflow1:res.data.followers
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
        this.setState({
          userData:res.data,
          userImage2:res.data.avatar_url,
          userName2:res.data.login,
          userflow2:res.data.followers
        })
    })
    .catch(err=>{
      console.log(err);
    });
  }
 resetHandle(e){
	 //console.log(e.target.name);
	 let user=e.target.name;
	 if(user=='user1'){
	 this.setState({
		 userImage1:null
	 })
        }
	else{
	this.setState({
		userImage2:null})
	}

 }
 compareUser(e){
  let flower1=this.state.userflow1;
  let flower2=this.state.userflow2;
  if(flower1>flower2){
  this.setState({
	  winner:1
  }) 
 }
else{
 this.setState({
	 winner:0
 })
}
  
 }
  render() {
    let img1=this.state.userImage1;
    let img2=this.state.userImage2;
    let Data=this.state.userData;
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
      {img1?<button className="btn"onClick={this.resetHandle} value={img1} name='user1'>reset</button>:null}
      {img2?<img src={img2}/>:null}
      {img2?<button className="btn" onClick={this.resetHandle} value={img2} name='user2'>reset</button>:null}
      <div className="row">
      {img1&&img2?<button className="btn"onClick={this.compareUser}>battle users</button>:null}
      </div>
      <div className="row">
        {this.state.winner==1?<p>winner is {this.state.userName1}</p>:<p>winner is {this.state.userName2}</p>}	 
      </div>
    </div>

    );
  }
}

export default User;

import React, { useState } from 'react';

import Tweet from './components/Tweet';
import ConditionalRenderingForm from './components/MyForm';

import './App.css';

function App() {
  /*const userList = [
    {id:1, name: 'Sachin', message: 'Hello from ', likes:"23"},
    {id:2, name: 'Rohit', message: 'Hello from ', likes:"44"},
    {id:3, name: 'Virat', message: 'Hello from ', likes:"65"}
  ]*/

  return (
    <div className="App">
      Hello from React JS !!! <br />

      <MyIntro name="Accolite" />
      
      <br />
      <ShowListItems />
    </div>
  );
}

/*
<hr />
      <Hello />

      <hr />
      <HelloWithProps sayHello="world from props"/>

      <hr />
      <ShowListItems />

      <ConditionalRenderingForm />

      
      <br/>
      <p>
        <strong className="tweet-header">Tweet List</strong>
      </p>


      <Tweet  key="1" name="React session" message="This is my react tutorial" likes="100" />
      <Tweet  key="2" name="Angular session" message="This is my Angular tutorial" likes="120" />


      { 
        userList.map( (user) => {
          return <Tweet  key={user.id} name={user.name} message={user.message} likes={user.likes} />
        }) 
      }
*/


//Intro class
class MyIntro extends React.Component{
  render(){
    return (
      <div>Hi My name is {this.props.name}</div>
    )
  }
}

// First app - show hello world and nested component 
class Hello extends React.Component{
  render(){
    return (
      <div>
        <div>Hello world!</div>        
        <NestedComponent />
      </div>
    )
  }
}

// Second app - passing data using props
class HelloWithProps extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>Hello {this.props.sayHello}</div>
    )
  }
}

// Third app - state and events
class NestedComponent extends React.Component{
  constructor(){
    super();
    this.state = {liked: 0}

    this.hitCounter = this.hitCounter.bind(this);
  }
  hitCounter(e){
    let _text = e.target.textContent;

    
    if(_text === 'Like'){
      this.setState({
        liked : this.state.liked + 1
      })
    }else{
      if(this.state.liked === 0){
        //
      }else{
        this.setState({
          liked : this.state.liked - 1
        })
      }      
    }    
  }
  render(){
    return (
      <div>
        <div>Likes {this.state.liked}</div>
        
        <button onClick={this.hitCounter}>Like</button>
        <span style={{marginLeft:'3px'}}></span>
        <button onClick={this.hitCounter}>Dislike</button>
      </div>
    )
  }
}

// Fourth app - Iterate items
var names = ["Rohit", "Manish", "Emily", "Roger"];

class ShowListItems extends React.Component{
  render(){
    return (
      <div>
        <span><b>List of names</b></span>
        { 
          names.map(function(name, index){
            return <div key={index}> Hello, {name} </div>
          }) 
        }
      </div>
    )
  }
}

//
export default App;

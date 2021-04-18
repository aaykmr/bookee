import logo from './logo.svg';
import './style.css';
import Tabs from './Tabs';
import React, {useState} from 'react';


class App extends React.Component{

  constructor(){
    super();
    this.state={};
  }

  fetchData(obj){
    fetch("http://localhost:8080/shifts")
    .then(response => response.json())
    .then(data => {obj.setState(data); console.log(obj.state)});
    
  }
  componentDidMount(){
    this.fetchData(this)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://uploads-ssl.webflow.com/5fa518ce1bd59b3b38b3a157/60100662a332914b0b5bbea8_bookee-logo-previously-studioyou-black.svg"} className="App-logo" alt="logo" />
        </header>
        <br></br>
        <Tabs state={this.state} fetchData={this.fetchData} this={this}/>
      </div>
    );
  }




}

export default App;


/*
function App() {
  
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://uploads-ssl.webflow.com/5fa518ce1bd59b3b38b3a157/60100662a332914b0b5bbea8_bookee-logo-previously-studioyou-black.svg"} className="App-logo" alt="logo" />
      </header>
      <br></br>
      <Tabs />
    </div>
  );
}

export default App;*/

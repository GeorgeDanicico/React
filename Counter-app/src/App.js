import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import React, { Component } from 'react';
import Counters from './components/counters';

class App extends Component {

  state = { 
    counters: [
        { id: 1, value: 4},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0}
    ]
 }

 // eslint-disable-next-line no-useless-constructor
 constructor(){
   super();
 }

 handleDecrement = (counterObj) => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counterObj);
  counters[index] = {...counterObj}
  counters[index].value --;

  this.setState({counters : counters});
 }

 handleReset= () => {
     const counters = this.state.counters.map(counter => {
         counter.value = 0;
         return counter;
     })
    this.setState({counters:counters});
 }

 handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value ++;
    
     this.setState({counters : counters});
 }

 handleDelete = (counterID) => {

     const counters = this.state.counters.filter(obj =>{
         return obj.id !== counterID;
     })

     this.setState({counters : counters});
 }

  render(){
  return (

    <React.Fragment>

    <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
    <main className="container">
      <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
      onDecrement={this.handleDecrement}
      />
    </main>
    
    </React.Fragment>
  );
  }
}

export default App;

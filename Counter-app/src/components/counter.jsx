
import React, { Component } from 'react';

class Counter extends Component {

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    
    render() { 

        return ( <div>
            <span className={"badge m-2 " + (this.props.counter.value != 0 ? "bg-primary" : "bg-warning") }>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm">Increment</button> 
            <button onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value == 0 ? true : false} 
            className="btn btn-secondary btn-sm m-2">Decrement</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)}  className="btn btn-danger btn-sm m-2">
                Delete
            </button>
            
            </div>);
    }

    formatCount(){
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }
}
 
export default Counter;
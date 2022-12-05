import React from "react";
import ReactDOM from "react-dom/client";

class Counter extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {value: 0}

        this.increment = this.increment.bind(this)

    }


    increment() {this.setState({value: this.state.value - 1})}

    // decrement() {this.setState({value: this.state.value - 1})}

    render(){
        return(
            <div>
                <h1>Counter App</h1>
                <h2>{this.state.value}</h2>
                <button type="button" onClick={this.increment}>Increment</button> <br></br>
                {/* <button type="button" onClick={this.decrement}>Decrement</button> */}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Counter />)
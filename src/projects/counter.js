import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function Counter(probs){

    // Function return type does not need to be specified in javaScript
    function decrement(){
        // Closures do not need curly brackets or the return keyword } lambda function
        setCount((prevCount) => prevCount > 0 ? prevCount - 1 : prevCount = 0)
    }

     function increment() {
        setCount((prevCount) => prevCount + 1)
    }
    
    
    // hooks
    //   - [variable_name, function_to_change_state]
    //   - The function defined that will manipulate the state recieves the variable defined as a callback value
    //That value can be manipulated or passed into a closure and then manipulated
    const [count, setCount] = useState(0);
    return (<div className="Counter">
        <h1>Current Count: {count}</h1>
        <button type="button" onClick={increment}> Increment </button>
        <br></br>
        <button type="button" onClick={decrement}> Decrement </button>
    </div>)
}
const _id = document.getElementById("root");
const root = ReactDOM.createRoot(_id);

root.render(<Counter />)
import React from "react";
import ReactDOM from "react-dom/client";

// Components
//  - A way to describe your UI
//  - Breaking UI down into individual pieces
//  - best implemented using JavaScript Functions
//  - Must be capital letters as React considers camel casing to be DOM tags

// props
//  - arbitrary number of properties
//  - props.member_variable_name
//  - Type is infered and not type restricted
//  - allows functions to have member variables that are passed by reference???

// props && Objects && C ++ Structs
//      -   props seem like they are a way to define an Object similar to a C ++ struct
//      -   Within a function call that in this case represents a component
//      -   comprised of React relements

// function Hello(props){
//     return <h1>Hello, {props.name}</h1>
// }

function _add( x, y){
    const result = parseInt(x) + parseInt(y);
    return result;
}

function Add(props){
    return <h1>{props.x} + {props.y} = {_add(props.x, props.y)}</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(<Add x='6' y = '8'/>)
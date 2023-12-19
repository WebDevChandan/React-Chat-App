//When we dealing with State,  we need to import react library. State used in component, So we'll import react whereever we build components. useState is a hook and All hoks start with 'use' keyword.
import React from "react";
//importing ReactDOM Object from react-dom library. Here, using /client just for the sake of support in react 18.
import ReactDom from "react-dom/client";  
import './index.css';
//we can skip to put extension of Js file because by default any file imported in react as Js file.
import App from './App';

// render() method of ReactDom object passing 2 param:
// 1. Passing JSX, 2. Where we're passing JSX
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);
// ReactDom.render( <App/>, document.getElementById('root'));
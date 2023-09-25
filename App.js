import React from "react";
import ReactDOM from "react-dom/client";

// What is happening in this code
/*
  In this code we're not loading the react form the CDN instead we've installed the react 
  and then we have installed the npm from which we're loading the react. node modules 
  gives us both react and react dom for our project. this is bundle by parcel. Parcel is
  main tool that helps us bundle and minified our code. it also helps us to make dev
  build as well as the prod build to run the code.

  The concept of jsx is that, it is totally different from the javascript and it is not
  html and javascript rather it is html like syntax and before js engine starts parcing this 
  it is transpiled by the babel which is inside the node module and after the node module
  transpiled it, given to js engine to further parse
*/
// first we'll create a element.

const elementOne = <h1>First Element in the JSX</h1>;

// now we'll create a component that will return a element or jsx.

const Fun = () => {
  return <h1>I am the component</h1>;
};

const Compo = () => {
  return (
    <div>
      <Fun />
      <h1>I am the composition</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Compo />);
// now we'll try component composition which is the component inside the component.

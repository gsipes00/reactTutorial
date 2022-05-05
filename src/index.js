import React from "react";
import ReactDom from "react-dom";

//component name 'Greeting' must have first letter capitilized
function Greeting() {
  return <h1>im Gene and this is my first react app cool!</h1>;
}
//'Greeting' tag MUST have a closing tag />
ReactDom.render(<Greeting />, document.getElementById("root"));

import React from "react";
import ReactDom from "react-dom";

// component name 'Greeting' must have first letter capitilized
// stateless functional component aka dumb component, does not have state
// always return JSX
function Greeting() {
  return <h1>im Gene and this is my first react app cool!</h1>;
}

// alternate way to create component with explicit function call more difficult to return html
// const Greeting = () => {
//   return React.createElement(
//     "h1",
//     {},
//     "im Gene and this is my first React app cool!"
//   );
// };

//'Greeting' tag MUST have a closing tag />
ReactDom.render(<Greeting />, document.getElementById("root"));

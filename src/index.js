import React from "react";
import ReactDom from "react-dom";

// css
import "./index.css";

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img src='https://imgs.search.brave.com/IIQW_a0eTwHXxFEBUInufV40aGMiwOxmPoY2hRwW43s/rs:fit:568:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/VWpuaWM1WDE4Q1Vh/MXM2X0JIVHZnSGFH/TCZwaWQ9QXBp' />
);
const Title = () => <h1>curl up with a good book.</h1>;

const Author = () => <h4>-Johnny B Goode</h4>;

ReactDom.render(<Booklist />, document.getElementById("root"));

// component name 'Greeting' must have first letter capitilized
// stateless functional component aka dumb component, does not have state
// always return JSX

// notes on JSX rules
// can only return a SINGLE element
// div / section / article or fragment - samantic html is encouraged
// use camelCase for html attribute
// className instead of class for element class
// close every element
// formatting

// alternate way to create component with explicit function call more difficult to return html
// const Greeting = () => {
//   return React.createElement(
//     "h1",
//     {},
//     "im Gene and this is my first React app cool!"
//   );
// };

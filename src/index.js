import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books.js";
import Book from "./book.js";

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

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

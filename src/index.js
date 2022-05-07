import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// variables
const books = [
  {
    id: 1,
    img: "https://imgs.search.brave.com/IIQW_a0eTwHXxFEBUInufV40aGMiwOxmPoY2hRwW43s/rs:fit:568:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/VWpuaWM1WDE4Q1Vh/MXM2X0JIVHZnSGFH/TCZwaWQ9QXBp",
    title: "Crypto 101",
    author: "Charles Hoskinson",
    date: "1/1/2002",
  },

  {
    id: 2,
    img: "https://imgs.search.brave.com/Zr4zRskQAxjlywc42Vsx3oC0Vtlgt61HDk2cOg7PA7E/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/SlR3Z3c2SVdHYVJw/b25FdmE4bUR3SGFF/NyZwaWQ9QXBp",
    title: "I love React",
    author: "McLovin",
    date: "5/15/2021",
  },
];

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
// Book component (can destructure the props directly in the parameters)
const Book = (props) => {
  const { img, title, author, date } = props;
  // attribute, eventHandler
  // on click, onMouseOver
  const clickHandler = () => {
    alert(title, date);
  };
  return (
    <article className='book'>
      <img src={img} alt='of a book' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference exmaple
      </button>
      <p>{date}</p>
    </article>
  );
};

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

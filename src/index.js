import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// variables
const firstBook = {
  img: "https://imgs.search.brave.com/IIQW_a0eTwHXxFEBUInufV40aGMiwOxmPoY2hRwW43s/rs:fit:568:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/VWpuaWM1WDE4Q1Vh/MXM2X0JIVHZnSGFH/TCZwaWQ9QXBp",
  title: "Crypto 101",
  author: "Charles Hoskinson",
};

const secondBook = {
  img: "https://imgs.search.brave.com/Zr4zRskQAxjlywc42Vsx3oC0Vtlgt61HDk2cOg7PA7E/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/SlR3Z3c2SVdHYVJw/b25FdmE4bUR3SGFF/NyZwaWQ9QXBp",
  title: "I love React",
  author: "McLovin",
};

function Booklist() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
// Book component (can destructure the props directly in the parameters)
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='of a book' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
// // secondBook component
// const Secondbook = (props) => {
//   console.log(props);
//   return (
//     <article className='book'>
//       <img src={props.img} alt='of a book' />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

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

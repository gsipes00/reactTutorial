import React from "react";

// Book component (can destructure the props directly in the parameters)
const Book = (props) => {
  const { img, title, author, date } = props;
  // attribute, eventHandler
  // on click, onMouseOver
  // reference example for click event
  const clickHandler = () => {
    alert(title);
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='of a book' />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference exmaple
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
      <p>{date}</p>
    </article>
  );
};

export default Book;

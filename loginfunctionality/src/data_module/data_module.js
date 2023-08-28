import React from "react";

const DataModule = (props) => {
  const booksdata = props.books;
  return (
    <>
      <h1>
        <p>{booksdata[0].author}</p>
        <p>{booksdata[0].title}</p>
      </h1>
    </>
  );
};

export default DataModule;

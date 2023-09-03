import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useSelector, useDispatch } from "react-redux";

import { allBooks } from "../features/bookSlice";

export default function List() {
  const value = useSelector((state) => state.books.value);
 
  const [BookList, setBookList] = useState(value);
  const dispatch = useDispatch();
  const [Authors, setAuthors] = useState([]);
  const [Publishers, setPublisher] = useState([]);
  function ProductList() {
    return BookList.map((item) => {
      if (item != null) {
        return <Product product={item} />;
      }
    });

  }

  const [selectedOption, setSelectedOption] = useState(""); 
  const [selectedOption2, setSelectedOption2] = useState(""); 
  const handleOptionChange = (event) => {
    const name = event.target.value; 

    if (name === "") {

      setBookList(value);
    } else {
      const filteredArray = value.filter((item) => {
        return item.Author === name;
      });
      setBookList(filteredArray);
    }

    setSelectedOption(event.target.value);
  };

  const handleOptionChange2 = (event) => {
    const name = event.target.value; 

    if (name === "") {

      setBookList(value);
    } else {
      const filteredArray = value.filter((item) => {
        return item.Publisher === name;
      });
      setBookList(filteredArray);
    }

    setSelectedOption2(event.target.value);
  };


  useEffect(() => {

    const authors = value.map((book) => book.Author);
    const uniqueAuthorsSet = new Set(authors);
    const data2 = Array.from(uniqueAuthorsSet);
    setAuthors(data2);



    const publishers = value.map((book) => book.Publisher);
    const uniquePublisherSet = new Set(publishers);
    const data3 = Array.from(uniquePublisherSet);
    setPublisher(data3);
    console.log(data3);
  }, []);


  function BooksAuthor() {
    return Authors.map((item) => {
      if (item != null) {
        return <option value={item}>{item}</option>;
      }
    });

  }

  function BooksPublisher() {
    return Publishers.map((item) => {
      if (item != null) {
        return <option value={item}>{item}</option>;
      }
    });
  }

  return (
    <section className='fsec-1'>
      <section className='fsec-2'>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">ALL Authors</option>
          {BooksAuthor()}
        </select>

        <select value={selectedOption2} onChange={handleOptionChange2}>
          <option value="">ALL BooksPublisher</option>
          {BooksPublisher()}
        </select>

      </section>
      <section className='fsec-3'>
        <div className='Book-List'>
          {ProductList()}
        </div>
      </section>
    </section>
  )
}

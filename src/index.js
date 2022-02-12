import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


const books = [
 {
  img: "https://images-na.ssl-images-amazon.com/images/I/51LHis3FzVL._AC_SX184_.jpg",
  title:'Black Heros',
  author: 'Author'
 },
 {
  img: "https://images-na.ssl-images-amazon.com/images/I/51l34Xy8mwL._AC_SX184_.jpg",
  title:'Little Blue Trucks Valentine',
  author: 'Alice'
  }
]

 

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book)=>{
        return (
          <Book book={book}></Book>
        );
      })}
    </section>
    
  );
}

const Book = (props) => {
  const { img, title, author} = props.book;
  return <article>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4 style ={{ color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h4>
    <p>{children}</p>
  </article>
}



ReactDom.render(<BookList/>,document.getElementById('root'));
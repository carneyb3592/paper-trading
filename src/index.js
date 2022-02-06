import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
    
  );
}
const author = 'Author';
const Book = () =>{
  const title = 'Black Heros'
  return <article>
    <img src="https://images-na.ssl-images-amazon.com/images/I/51LHis3FzVL._AC_SX184_.jpg" alt=""/>
    <h1>{title}</h1>
    <h4 style ={{ color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{author}</h4>
  </article>
}

// const Greeting = () =>{
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'));
// };

ReactDom.render(<BookList/>,document.getElementById('root'));
import React, { useState } from 'react';
import './App.scss';

function Quote() {
  const quoteBank = [{
    author: 'Dalia lama',
    quote: 'The purpose of our lives is to be happy.'
  },
  {
    author: 'Nelson Mandela'
    , quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
  }
  ];
  const randomGenerator = () => Math.floor(Math.random() * quoteBank.length);
  let quoteNumber = randomGenerator();
  const [quote, randomQuote] = useState(quoteBank[quoteNumber].quote);
  const [author, randomAuthor] = useState(quoteBank[quoteNumber].author);
  const randomAuthorAndQuote = () => {
    let random = randomGenerator();
    if (random !==  quoteNumber){
      quoteNumber = random
      randomQuote(quoteBank[quoteNumber].quote)
      randomAuthor(quoteBank[quoteNumber].author)
      console.log(quoteNumber)
    } else {
      randomAuthorAndQuote()
    }  
    

  }
  

  return (
    <div className='App'>
      <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">- {author}</p>
      <a id="tweet-quote" href='twitter.com/intent/tweet' _blank>T</a>
      <button id="new-quote" onClick={()=> {
        randomAuthorAndQuote()
        }}>New Quote</button>
    </div>
    </div>
  );
}

export default Quote;

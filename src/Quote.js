//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import TwitterIcon from 'https://cdn.skypack.dev/@mui/icons-material/Twitter';
import './App.scss';
import quoteList from './quotes_list';
import colorList from './colorList';
//var { useState } = 'react';

function Quote() {
  const colors = colorList;
  const quoteBank = quoteList;
  const randomGenerator = () => Math.floor(Math.random() * quoteBank.length);
  const randomColor = () => Math.floor(Math.random() * colors.length);

  let quoteNumber = randomGenerator();
  let colorNumber = randomColor();
  const [quote, randomQuote] = useState(quoteBank[quoteNumber].text);
  const [author, randomAuthor] = useState(quoteBank[quoteNumber].author);
  const [color, colorPicker] = useState(colors[colorNumber].hex);
  const randomAuthorAndQuote = () => {
    let random = randomGenerator();
    if (random !==  quoteNumber){
      quoteNumber = random
      randomQuote(quoteBank[quoteNumber].text)
      randomAuthor(quoteBank[quoteNumber].author)
      colorNumber = randomColor()
      colorPicker(colors[colorNumber].hex)
      console.log(quoteNumber)
    } else {
      randomAuthorAndQuote()
    }  
    

  }
  

  return (
    <div className='App'>
      <header className='header' style={{backgroundColor: color, color: color}}>
      <div id="quote-box" >
      <p id="text">{quote}</p>
      <p id="author">- {author}</p>
      <a id="tweet-quote" href='https://twitter.com/intent/tweet' target='_blank' rel="noreferrer" style={{backgroundColor: color}}>
        {//<FontAwesomeIcon icon={faTwitter} />}
        {TwitterIcon}
      }
      </a>
      <button id="new-quote" style={{backgroundColor: color}} onClick={()=> {
        randomAuthorAndQuote()
        }}>New Quote</button>
    </div>
      </header>
    </div>
  );
}

export default Quote;

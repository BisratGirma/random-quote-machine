import React, { useState } from "https://cdn.skypack.dev/react";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom";
import * as scss from "https://cdn.skypack.dev/scss";
//import * as fetch from "https://cdn.skypack.dev/fetch@1.1.0";

function Quote() {
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857"
  ];
  let quoteBank = [];
  fetch("https://raw.githubusercontent.com/bisrax/random-quote-machine/master/src/quotes_list.json").then((response) => response.json()).then((data) => {
    quoteBank = data.map((v, k) => data[k])
  });
  console.log(quoteBank);
  const randomGenerator = () => Math.floor(Math.random() * quoteBank.length);
  const randomColor = () => Math.floor(Math.random() * colors.length);

  let quoteNumber = randomGenerator();
  let colorNumber = randomColor();
  const [quote, randomQuote] = useState(quoteBank[quoteNumber].text);
  const [author, randomAuthor] = useState(quoteBank[quoteNumber].author);
  const [color, colorPicker] = useState(colors[colorNumber]);
  const randomAuthorAndQuote = () => {
    let random = randomGenerator();
    if (random !== quoteNumber) {
      quoteNumber = random;
      randomQuote(quoteBank[quoteNumber].text);
      randomAuthor(quoteBank[quoteNumber].author);
      colorNumber = randomColor();
      colorPicker(colors[colorNumber]);
      console.log(quoteNumber);
    } else {
      randomAuthorAndQuote();
    }
  };

  return (
    <div className="App">
      <header
        className="header"
        style={{ backgroundColor: color, color: color }}
      >
        <div id="quote-box">
          <p id="text">{quote}</p>
          <p id="author">- {author}</p>
          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: color }}
          >
            Tweet
          </a>
          <button
            id="new-quote"
            style={{ backgroundColor: color }}
            onClick={() => {
              randomAuthorAndQuote();
            }}
          >
            New Quote
          </button>
        </div>
      </header>
    </div>
  );
}
ReactDOM.render(<Quote />, document.getElementById("root"));

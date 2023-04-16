import { useState } from "react";
import "./App.css";
import { Fragment } from "react";

const quotes = [
  "The way to get started is to quit talking and begin doing.",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  "Life is what happens when you're busy making other plans.",
  "It is during our darkest moments that we must focus to see the light.",
];

const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <Fragment>
      <h1>Quotes</h1>
      <div className="container">
        <button
          type="button"
          className="arrows"
          onClick={() => {
            if (index == 0) {
              setIndex(3);
            } else {
              setIndex(index - 1);
            }
          }}
        >
          &larr;
        </button>
        {quotes[index] && <p>"{quotes[index]}"</p>}
        <button
          type="button"
          className="arrows"
          onClick={() => {
            if (index == 3) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        >
          &rarr;
        </button>
      </div>
    </Fragment>
  );
};

export default App;

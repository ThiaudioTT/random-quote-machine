"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { IQuote } from "./models/quote.interface";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function Home() {
  const [quote, setQuote] = useState<IQuote>({
    content: "I am a quote",
    author: "Author",
  });

  function getRandomQuote() {
    // setQuote({ content: "I am a new quote", author: "New Author" })

    fetch("https://api.quotable.io/random")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        const quote: IQuote = {
          content: data.content,
          author: data.author,
        };
        setQuote(quote);
      })
      .catch((error) => {
        console.error("There was a problem fetching the quote", error);
        window.alert("There was a problem fetching the quote");
      });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center items-center p-24">
      <div
        id="quote-box"
        className="bg-white p-8 rounded-lg shadow-lg text-black"
        style={{maxWidth: "900px"}}
      >
        <div className="quote-flexbox">
          <div className="left-quote text-5xl">
            <FontAwesomeIcon icon={faQuoteLeft} className="w-8 text-right" />
          </div>
          <div className="quote-content text-center">
            <p id="text" className="font-serif text-5xl italic">
              {quote.content}
            </p>
          </div>
          <div className="right-quote text-right text-5xl">
            <FontAwesomeIcon icon={faQuoteRight} className="w-8 ml-auto" />
          </div>
          <p id="author" className="ml-auto text-right">
            ~ {quote.author}
          </p>
        </div>

        <div className="actions-footer mt-8 flex justify-between">
          <a
            id="tweet-quote"
            className="btn flex-item ml-3"
            href="https://twitter.com/intent/tweet"
            target="_blank"
          >
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>

          <button
            id="new-quote"
            className="btn flex-item mr-3"
            onClick={getRandomQuote}
          >
            <FontAwesomeIcon icon={faShuffle} size="2x" />
          </button>
        </div>
      </div>
    </main>
  );
}

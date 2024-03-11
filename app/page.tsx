import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center items-center p-24">
      <div
        id="quote-box"
        className="bg-white p-8 rounded-lg shadow-lg text-black"
      >
        <div className="quote-flexbox">
          <p id="text" className="font-serif text-5xl italic text-center">
            <FontAwesomeIcon icon={faQuoteLeft} className="w-8" />
            I am the quote text
            <FontAwesomeIcon icon={faQuoteRight} className="w-8 ml-auto" />
          </p>

          <p id="author" className="ml-auto text-right">
            ~ Author
          </p>
        </div>

        <div className="actions-footer">
          <a
            id="tweet-quote"
            className="btn"
            href="https://twitter.com/intent/tweet"
            target="_blank"
          >
            Tweet quote
          </a>

          <button id="new-quote" className="btn">
            New quote
          </button>
        </div>
      </div>
    </main>
  );
}

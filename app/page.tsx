import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center items-center p-24">
      <div
        id="quote-box"
        className="bg-white p-8 rounded-lg shadow-lg text-black"
      >
        <div className="quote">
          <h1 id="text">I am the quote text</h1>
          <p id="author">- Author</p>
        </div>

        <div className="actions-footer">
          <a
            id="tweet-quote"
            className="btn"
            href="https://twitter.com/intent/tweet"
            target="_blank">
            Tweet quote
          </a>

          <button id="new-quote" className="btn">New quote</button>
        </div>
      </div>
    </main>
  );
}

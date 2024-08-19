import { useEffect, useState } from "react";
const colors = [
  "#FF6F61", // Coral
  "#6B5B95", // Royal Purple
  "#88B04B", // Greenery
  "#F7CAC9", // Rose Quartz
  "#92A8D1", // Serenity Blue
  "#034F84", // Classic Blue
  "#F7786B", // Peach Echo
  "#DE5D83", // Blush Pink
  "#45B8AC", // Seafoam Green
  "#D65076"  // Raspberry Sorbet
];
function App() {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState({});
  const [randomColor, setRandomColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const getQuote = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
        setLoading(false);
      });
  };
  useEffect(() => {
    getQuote(); // Fetch the initial quote and set the initial color
  }, []);
  return !loading && (
    <div className="" id="quote-box" style={{backgroundColor:randomColor}}>
      
      <blockquote className="" id="text">
      &quot; { quote.content} &quot;
      </blockquote>
      <div className="" id="author">
         {quote.author}
      </div>
      <button className="" id="new-quote" onClick={getQuote}>New Quote</button>
      <a className="" id="tweet-quote" href={`twitter.com/intent/tweet/post?hashtags=quotes&related=freecodecamp&text=${quote.content}`}>
         Tweet
      </a>
    </div>
  );
}
export default App;

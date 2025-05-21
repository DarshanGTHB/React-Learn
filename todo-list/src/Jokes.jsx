import React, { useEffect, useState } from "react";

const Jokes = () => {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getJoke = async () => {
      setIsLoading(true);
      let res = await fetch(URL);
      res = await res.json();
      setJoke({ setup: res.setup, punchline: res.punchline });
      setIsLoading(false);
    };
    getJoke();
  }, []);

  const handleGet = async () => {
    setIsLoading(true);
    let res = await fetch(URL);
    res = await res.json();
    setJoke({ setup: res.setup, punchline: res.punchline });
    setIsLoading(false);
  };

  return (
    <>
      <h1>Joke</h1>
      <h3>Setup: {!isLoading && <p>{joke.setup}</p>}</h3>
      <h3>Punchline: {!isLoading && <p>{joke.punchline}</p>}</h3>
      <button onClick={handleGet} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get New Joke"}
      </button>
    </>
  );
};

export default Jokes;

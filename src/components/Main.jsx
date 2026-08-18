import { useState } from "react";
import Hero from "./Hero";

const Main = () => {
  // stored the click state of the cta button
  let [isClicked, setIsClicked] = useState(false);

  // create method to handle cta button click
  let handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <main>
      {isClicked ? <p>Nothing to see here</p> : <Hero onClick={handleClick} />}
    </main>
  );
};

export default Main;

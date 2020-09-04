import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Flashcard from "./Flashcard";
import data from "./data";
import { css } from "@emotion/core";

const App = () => {
  return (
    <>
      <Navbar />
      <main
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
          padding: 2em;
        `}
      >
        {data.map((card) => (
          <Flashcard key={card.id} flashcard={card} />
        ))}
      </main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import MasonryLayout from "./MasonryLayout";
import Flashcard from "./Flashcard";
import data from "./data";

const App = () => {
  return (
    <>
      <Navbar />
      <MasonryLayout minWidth={450}>
        {data.map((card) => (
          <Flashcard key={card.id} flashcard={card} />
        ))}
      </MasonryLayout>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

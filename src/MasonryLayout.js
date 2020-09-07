import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/core";

const fillColumns = (children, columns) => {
  children.forEach((child, i) => {
    columns[i % columns.length].push(child);
  });
};

const MasonryLayout = ({ children, minWidth = 500 }) => {
  const [numCols, setNumCols] = useState(4);
  const masonRef = useRef();
  const cols = [...Array(numCols)].map(() => []);
  fillColumns(children, cols);

  const onResize = () => {
    setNumCols(Math.ceil(masonRef.current.offsetWidth / minWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main
      css={css`
        display: grid;
        grid-auto-flow: column;
        grid-gap: 1em;
        grid-auto-rows: 50px;
        margin: 2em;
      `}
      ref={masonRef}
    >
      {[...Array(numCols)].map((_, index) => {
        return (
          <div
            css={css`
              display: grid;
              grid-gap: 1em;
            `}
            key={index}
          >
            {cols[index]}
          </div>
        );
      })}
    </main>
  );
};

export default MasonryLayout;

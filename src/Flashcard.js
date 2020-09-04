import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/core";

const Flashcard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState(false);
  const [height, setHeight] = useState("initial");
  const cardRef = useRef();
  const frontRef = useRef();
  const backRef = useRef();
  const { word, description } = flashcard;

  const flippedStyle = css`
    transform: perspective(1000px) ${flipped ? "rotateY(180deg)" : "rotateY(0)"};
    background-color: ${flipped ? "#fab700" : "#00c484"};
  `;
  const frontAndBackStyle = css`
    position: absolute;
    padding: 1em;
    backface-visibility: hidden;
    text-align: left;
    p,
    h2 {
      margin: 0;
    }
  `;

  const handleFlip = (e) => {
    if (cardRef.current.contains(e.target)) {
      setFlipped(!flipped);
    }
  };

  function setMaxHeight() {
    const frontHeight = frontRef.current.getBoundingClientRect().height;
    const backHeight = backRef.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }

  useEffect(setMaxHeight, [word, description]);
  // makes sure the cards resize dynamically to the right screen size
  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);

  return (
    <button
      style={{ height: height }}
      css={css`
        display: flex;
        position: relative;
        border-radius: 5px;
        transform-style: preserve-3d;
        transition: 400ms;
        :focus,
        :hover {
          cursor: pointer;
          outline: none;
          border-color: #ff0060;
          box-shadow: 0 0 20px #9ecaed;
        }
        ${flippedStyle};
      `}
      ref={cardRef}
      onClick={handleFlip}
    >
      <div css={frontAndBackStyle} ref={frontRef}>
        <h2
          css={css`
            font-size: 2.3rem;
            word-break: break-word;
          `}
        >
          {word}
        </h2>
      </div>
      <div
        css={css`
          font-size: 1rem;
          transform: rotateY(-180deg);
          ${frontAndBackStyle}
        `}
        ref={backRef}
      >
        <p>{description}</p>
      </div>
    </button>
  );
};

export default Flashcard;

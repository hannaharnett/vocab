import React from "react";
import { css } from "@emotion/core";

const Navbar = () => {
  return (
    <header
      css={css`
        font-size: 1.5rem;
        color: #0096bb;
        display: flex;
        align-items: center;
        margin: 1em 1.5em;
      `}
    >
      <h1>Vocab</h1>
    </header>
  );
};

export default Navbar;

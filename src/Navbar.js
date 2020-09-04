import React from "react";
import { css } from "@emotion/core";

const Navbar = () => {
  return (
    <header
      css={css`
        font-size: 1rem;
        color: #edd8ac;
        display: flex;
        align-items: center;
        padding: 2em 2em 0 2em;
      `}
    >
      <h1>Vocab</h1>
    </header>
  );
};

export default Navbar;

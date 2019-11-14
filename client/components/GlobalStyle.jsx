import React from "react";
import Radium, { Style } from "radium";

export default function GlobalStyle() {
  return (
    <Style
      rules={{
        body: {
          margin: 0,
          padding: 0
        }
      }}
    />
  );
}

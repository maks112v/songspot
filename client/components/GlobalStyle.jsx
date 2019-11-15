import React from "react";
import Radium, { Style } from "radium";

export default function GlobalStyle() {
  return (
    <Style
      rules={{
        body: {
          backgroundColor: "#F4F7FD",
          margin: 0,
          padding: 0,
          fontFamily: "Roboto",
          boxSizing: "border-box"
        }
      }}
    />
  );
}

import { Global, css } from "@emotion/core";

export const colors = {
  main: "#fff",
  light: "#F4F7FD"
};

export const breakingPoints = {
  xl: "@media (max-width: 1200px)",
  lg: "@media (max-width: 1000px)",
  md: "@media (max-width: 800px)",
  sm: "@media (max-width: 600px)"
};

export default function Styles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          background-color: "#F4F7FD";
          margin: 0;
          padding: 0;
          font-family: "Roboto", sans-serif;
        }
      `}
    />
  );
}

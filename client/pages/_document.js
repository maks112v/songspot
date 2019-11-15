import Document, { Html, Head, Main, NextScript } from "next/document";
import GlobalStyle from "../components/GlobalStyle";
import "../firebase";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Store from "../components/useStore";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4285f4"
    },
    secondary: {
      main: "#ff6347"
    }
  }
});

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Store>
          <Html>
            <Head>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
              />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
            <GlobalStyle />
          </Html>
        </Store>
      </ThemeProvider>
    );
  }
}

export default MyDocument;

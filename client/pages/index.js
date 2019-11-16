import React from "react";
import Radium from "radium";
import firebase from "firebase";
import { Input, TextField, Typography } from "@material-ui/core";

function Index({ ...rest }) {
  console.log(rest);
  return (
    <div>
      <section
        style={{
          maxWidth: 1000,
          margin: "50px auto",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#BCD4FD",
          padding: "20px 40px",
          borderRadius: 30
        }}
      >
        <div style={{ width: "50%", margin: "50px 0" }}>
          <h1
            style={{
              margin: "0 0 30px",
              fontWeight: "lighter",
              fontSize: 35
            }}
          >
            The Easiest Place to Get <strong>Worship Songs</strong>
          </h1>
          <TextField
            color="secondary"
            style={{ width: "60%" }}
            label="Search"
            variant="outlined"
          />
        </div>
        <div style={{ width: "50%" }}>
          {/* <img style={{ width: "80%" }} src="/static/landing.svg" /> */}
        </div>
      </section>
      <section style={{ maxWidth: 1000, margin: "50px auto" }}>
        <Typography variant="h5" component="h3">
          Categories
        </Typography>
        <div></div>
      </section>
    </div>
  );
}

export default Index;

Index.getInitialProps = async ({ query }) => {
  // const categoriesQuery = await firebase
  //   .firestore()
  //   .collection("categories")
  //   .get();
  console.log("ran");

  return { test: "test" };
};

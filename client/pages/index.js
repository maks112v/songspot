import React from "react";
import Radium from "radium";
import firebase from "firebase";

function Index() {
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default Radium(Index);

Index.getInitialProps = async ({ query }) => {
  firebase.firestore().collection("");
};

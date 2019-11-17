import React from "react"
import firebase from "firebase"
import { Input, TextField, Typography } from "@material-ui/core"

function Index({ categoriesQuery, ...rest }) {
  console.log(rest)
  return (
    <div>
      <section
        css={{
          maxWidth: 1000,
          margin: "50px auto",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#BCD4FD",
          padding: "20px 40px",
          borderRadius: 30,
        }}>
        <div css={{ width: "50%", margin: "50px 0" }}>
          <h1
            css={{
              margin: "0 0 30px",
              fontWeight: "lighter",
              fontSize: 35,
            }}>
            The Easiest Place to Get <strong>Worship Songs</strong>
          </h1>
          <TextField
            color="secondary"
            css={{ width: "60%" }}
            label="Search"
            variant="outlined"
          />
        </div>
        <div css={{ width: "50%" }}>
          {/* <img style={{ width: "80%" }} src="/static/landing.svg" /> */}
        </div>
      </section>
      <section css={{ maxWidth: 1000, margin: "50px auto" }}>
        <Typography css={{ marginLeft: 40 }} variant="h5" component="h3">
          Categories
        </Typography>
        <div></div>
      </section>
    </div>
  )
}

export default Index

Index.getInitialProps = async ({ query }) => {
  let categories = []
  firebase
    .firestore()
    .collection("categories")
    .get()
    .then(res => {
      console.log(res.size)
      res.docs.forEach(doc => {
        const data = doc.data()
        categories.push({ ...data, id: doc.id })
      })
    })

  return { categories }
}

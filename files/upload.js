const firebase = require("firebase")
const csv = require("csv-parser")
const path = require("path")
const fs = require("fs")
const officeParser = require("officeparser")

const firebaseConfig = {
  apiKey: "AIzaSyCajsm4n3CDl0hlK3Tx7A9-ovxCB7AKJzo",
  authDomain: "song-spot-e31ef.firebaseapp.com",
  databaseURL: "https://song-spot-e31ef.firebaseio.com",
  projectId: "song-spot-e31ef",
  storageBucket: "song-spot-e31ef.appspot.com",
  messagingSenderId: "1043510911013",
  appId: "1:1043510911013:web:a4f29933a37efd13c71fcc",
  measurementId: "G-RC5JG4KHBP",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

// async function main() {
//   let results = []
//   fs.createReadStream("hymnru.csv")
//     .pipe(csv())
//     .on("data", data => results.push(data))
//     .on("end", () => {
//       console.log(results[0])
//       asyncForEach(results, async (data, index) => {
//         console.log(`${index + 1} / ${results.length}`)
//         // const lyrics = data.song_text.replace(/&|Verse \d|Verse|Refrain/g, "")
//         const lyrics = data.song_text.replace(
//           /&|Куплет \d|Куплет|Припев \d|Припев/g,
//           "",
//         )
//         await firebase
//           .firestore()
//           .collection("songs")
//           .add({
//             title: data.title,
//             words: data.words,
//             number: data.number,
//             lyrics,
//             lang: "ru",
//             group: "hymn",
//           })
//       })
//     })
// }

async function main() {
  console.log(__dirname)
  const directoryPath = path.join(__dirname, "powerpoints")
  let files = []
  fs.readdir(directoryPath, function(err, filesQuery) {
    files = filesQuery
  })
  console.log(files)

  asyncForEach(files, async file => {
    await officeParser.parsePowerPoint(directoryPath + "/" + file, function(
      data,
    ) {
      console.log(file, data)
    })
  })
}

main()

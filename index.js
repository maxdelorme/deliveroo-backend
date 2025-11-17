const express = require("express");
const cors = require("cors");
const data = require("./assets/json/data.json");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json(data);
});

// Northflank va nous fournir une variable process.env.PORT
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

// // Revient à faire :

// if (process.env.PORT) {
//   app.listen(process.env.PORT, () => {
//     console.log("Server started");
//   });
// } else {
//   app.listen(3000, () => {
//     console.log("Server started");
//   });
// }

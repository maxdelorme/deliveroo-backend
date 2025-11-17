const axios = require("axios");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const data = require("./assets/json/data.json");
const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${process.env.BEARER}` },
    };
    const response = await axios.get(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/deliveroo/menu/Paris/paris-3e-temple/hank-burger-paris-archives?geohash=u09wjb16vbhd",
      config
    );
    res.json(response.data);
  } catch (error) {}
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

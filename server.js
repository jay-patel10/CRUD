const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();


var corsOptions = {
  origin: "http://localhost:8787"
};
 
const db = require("./app/models");
db.sequelize.sync();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ 
  extended: true 
})); 

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});
require("./app/routes/product-routes")(app);
require("./app/routes/user-routes")(app);
require("./app/routes/userVerification")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {   
  console.log("Running on port ", PORT);
});

import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import iniWebRoutes from "./route/web";
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config app
viewEngine(app);
iniWebRoutes(app);

let port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`Backend nodejs run on the port ${port}`);
});

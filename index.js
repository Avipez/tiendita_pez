const express = require("express");
const app = express();
const routerApi = require("./routes")
const port = 8080;

routerApi(app);

app.get("/", (req, resp) => {
  resp.send("hola mi server en express");
});

app.get("/nueva_ruta", (req, resp) => {
  resp.send("hola soy una nueva ruta");
});

app.listen(port, () => {
  console.log("Mi port" + port);
});


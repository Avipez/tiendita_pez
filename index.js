const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, resp) => {
  resp.send("hola mi server en express");
});

app.get("/nueva_ruta", (requ, resp) => {
  resp.send("hola soy una nueva ruta");
})

app.get("/data", (requ, resp) => {
  resp.json({
    nombre: "Metroid Dread",
    precio: "1200"
  });
})

app.listen(port, () => {
  console.log("Mi port" + port);
});

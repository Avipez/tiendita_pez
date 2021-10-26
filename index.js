const express = require("express");
const routerApi = require("./routes")

const { logErrors, errorHandler, boomErrorHandler } = require ("./middleware/error.handler")

const app = express();
const port = 8080;

app.use(express.json());

routerApi(app);

app.get("/", (req, resp) => {
  resp.send("hola mi server en express");
});

app.get("/nueva_ruta", (req, resp) => {
  resp.send("hola soy una nueva ruta");
});

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log("Mi port" + port);
});


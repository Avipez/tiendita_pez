const express = require("express");
const categoriesRouter = express.Router();

categoriesRouter.get("/categorias/:categoriaID/productos/:productoID", (req, resp) => {
  const { categoriaID, productoID} = req.params;
  resp.json({
    categoriaID,
    productoID
  });
});

module.exports = categoriesRouter;

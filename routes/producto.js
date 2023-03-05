const express=require("express");
const router = express.Router();
const fs = require("fs")

const productoController = require("../controller/productoController");

router.get("/list", productoController.list);
router.get("/productDetail/:id", productoController.detail);
router.post("/edicYProd", productoController.processCreate);
router.get("/edicYProd", productoController.create);
router.get("/:id/edit", productoController.edit);
//router.put("/product/:id", productoController.);
//router.get("/product/:id", productoController.);

module.exports = router;
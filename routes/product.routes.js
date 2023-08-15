const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.post("/", productController.postProduct);
router.get("/", productController.getProductLists);
router.get("/:id", productController.getProduct);
router.put("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;

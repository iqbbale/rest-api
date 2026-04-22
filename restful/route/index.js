import express from "express";
import {
  getProduct,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct
} from "../controller/productController.js";

const router = express.Router();
// express.Router ini bisa digunakan untuk memangil patch & delete

router.get("/", getProduct);
router.get("/:id", getProductById);
router.post("/", saveProduct);
// pacth untuk edit datanya
router.patch("/:id", updateProduct);
// ini delete
router.delete("/:id", deleteProduct);

export default router;
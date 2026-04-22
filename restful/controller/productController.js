import Product from "../models/product.js";

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    // 500 itu kesalahan disisi dev
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    // 404 itu kesalahan, yang mana data tidak ditemukan
    res.status(404).json({ message: error.message });
  }
};

export const saveProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const products = await product.save();
    // untuk 201 itu untuk created tetapi nanti otomatis masuk ke code 200
    res.status(201).json(products);
  } catch (error) {
    // 400 itu kesalahan disisi client
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  // kita akan validasi disini apakah idnya ada atau tidak
  const cekId = await Product.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "Data Tidak Ditemukan" });
  try {
    const products = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body },
    );
    // untuk 200 itu untuk berhasil
    res.status(200).json(products);
  } catch (error) {
    // 400 itu kesalahan disisi client
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const cekId = await Product.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "Data Tidak Ditemukan" });
  try {
    const deleteProducts = await Product.deleteOne({ _id: req.params.id });
    // untuk 200 itu untuk berhasil
    res.status(200).json(deleteProducts);
  } catch (error) {
    // 400 itu kesalahan disisi client
    res.status(400).json({ message: error.message });
  }
};

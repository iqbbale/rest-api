import mongoose from "mongoose";

// buat schema untuk struktur data
const Product = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Product", Product);

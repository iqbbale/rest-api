import express from "express";
import mongoose from "mongoose";
import router from "./route/index.js";
// install di npm : npm i cors
// CORS = cross origin resourch sharing
// agar api kita dapat di akses di luar domain
import cors from "cors";

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/restful-db");

const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
// jika conection berhasil maka jalankan
db.once("open", () => {
  console.log("Database Connected");
});

// tambahkan cors di middleware
app.use(cors())

// ini adalah middleware dari express agar nanti kita bisa menerima post dari data dalam format json
app.use(express.json());
// route
// jika begini maka endPoint kita akan di mulai dengan product
app.use("/product", router);

app.listen(port, () => {
  console.log(`server runnig at port ${port}`);
})
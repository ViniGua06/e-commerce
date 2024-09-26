import Express, { Request, Response } from "express";

import Cors from "cors";

import bodyParser from "body-parser";
import { productRouter } from "./Routes/product.route";

const app = Express();

app.use(Cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import mongoose from "mongoose";
import { ErrorHandler } from "./Middlewares/ErrorHandler";
import { userRouter } from "./Routes/user.route";
import { storeRouter } from "./Routes/store.route";

export const mongo = mongoose
  .connect(
    "mongodb+srv://22200460:uoQfc8BcFoIL6pce@cluster0.kiull.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Conectado ao mongo!");
  })
  .catch((e) => console.log(e));

app.use(productRouter);
app.use(userRouter);
app.use(storeRouter);

app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("Conectado!");
});

app.get("/", (req: Request, res: Response) => {
  res.send("OLA");
});
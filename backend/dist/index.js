"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const product_route_1 = require("./Routes/product.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const mongoose_1 = __importDefault(require("mongoose"));
const ErrorHandler_1 = require("./Middlewares/ErrorHandler");
const user_route_1 = require("./Routes/user.route");
const store_route_1 = require("./Routes/store.route");
exports.mongo = mongoose_1.default
    .connect("mongodb+srv://22200460:uoQfc8BcFoIL6pce@cluster0.kiull.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("Conectado ao mongo!");
})
    .catch((e) => console.log(e));
app.use(product_route_1.productRouter);
app.use(user_route_1.userRouter);
app.use(store_route_1.storeRouter);
app.use(ErrorHandler_1.ErrorHandler);
app.listen(3000, () => {
    console.log("Conectado!");
});
app.get("/", (req, res) => {
    res.send("OLA");
});

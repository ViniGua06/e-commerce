"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_repository_1 = require("../Repositories/user.repository");
const userRepository = new user_repository_1.UserRepository();
class UserController {
    constructor() {
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield userRepository.getUsers();
            res.status(200).json(users);
        });
        this.getUserById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield userRepository.getUserById(id);
                res.status(200).json(user);
            }
            catch (error) {
                next(error);
            }
        });
        this.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const insertedUser = yield userRepository.insertUser(user);
                res.status(201).json({
                    message: `Usuário ${insertedUser.name} cadastrado!`,
                    user: insertedUser,
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.loginUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                console.log(req.body);
                const user = yield userRepository.loginUser(email, password);
                res.status(200).json({ message: "Usuário logado!", user: user });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;

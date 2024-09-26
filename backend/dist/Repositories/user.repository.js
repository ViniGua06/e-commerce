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
exports.UserRepository = void 0;
const BadRequest_error_1 = require("../Errors/BadRequest.error");
const User_1 = require("../Models/User");
class UserRepository {
    constructor() {
        this.getUsers = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.User.find();
            return users;
        });
        this.getUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ _id: id });
            if (!user)
                throw new BadRequest_error_1.BadRequestError("Usuário não encontrado!");
            return user;
        });
        this.insertUser = (user) => __awaiter(this, void 0, void 0, function* () {
            const alreadyIn = yield User_1.User.findOne({ email: user.email });
            if (alreadyIn !== null)
                throw new BadRequest_error_1.BadRequestError("Email já cadastrado!");
            const insertedUser = new User_1.User(user);
            insertedUser.save();
            return insertedUser;
        });
        this.loginUser = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ email: email, password: password });
            if (!user)
                throw new BadRequest_error_1.BadRequestError("Credenciais erradas!");
            return user;
        });
    }
}
exports.UserRepository = UserRepository;

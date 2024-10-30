import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../Repositories/user.repository";
import { IUser } from "../Interfaces/IUser";
import { JwtServices } from "../Services/Jwt.services";

const userRepository = new UserRepository();
const jwtServices = new JwtServices();

export class UserController {
  getUsers = async (req: Request, res: Response) => {
    const users = await userRepository.getUsers();

    res.status(200).json(users);
  };

  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const user = await userRepository.getUserById(id);

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: IUser = req.body;

      const insertedUser = await userRepository.insertUser(user);

      const token = jwtServices.createToken(insertedUser._id.toString());

      res.status(201).json({
        message: `Usuário ${insertedUser.name} cadastrado!`,
        user: insertedUser,
        token: token,
      });
    } catch (error) {
      next(error);
    }
  };

  setUserImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user_id } = req.params;
      const { image } = req.body;

      await userRepository.setUserImage(user_id, image);

      res.status(200).json({ message: "Foto de Perfil alterada!" });
    } catch (error) {
      next(error);
    }
  };

  loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const user = await userRepository.loginUser(email, password);

      const token = jwtServices.createToken(user._id.toString());

      res
        .status(200)
        .json({ message: "Usuário logado!", user: user, token: token });
    } catch (error) {
      next(error);
    }
  };
}

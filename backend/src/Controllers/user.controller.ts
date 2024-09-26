import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../Repositories/user.repository";
import { IUser } from "../Interfaces/IUser";

const userRepository = new UserRepository();

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

      res.status(201).json({
        message: `Usuário ${insertedUser.name} cadastrado!`,
        user: insertedUser,
      });
    } catch (error) {
      next(error);
    }
  };

  loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      console.log(req.body);

      const user = await userRepository.loginUser(email, password);

      res.status(200).json({ message: "Usuário logado!", user: user });
    } catch (error) {
      next(error);
    }
  };
}

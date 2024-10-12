import { BadRequestError } from "../Errors/BadRequest.error";
import { IUser } from "../Interfaces/IUser";
import { User } from "../Models/User";

export class UserRepository {
  getUsers = async () => {
    const users = await User.find();

    return users;
  };

  getUserById = async (id: string) => {
    const user = await User.findOne({ _id: id });

    if (!user) throw new BadRequestError("Usuário não encontrado!");

    return user;
  };

  insertUser = async (user: Omit<IUser, "image">) => {
    const alreadyIn = await User.findOne({ email: user.email });

    if (alreadyIn !== null) throw new BadRequestError("Email já cadastrado!");

    const insertedUser = new User(user);

    insertedUser.save();

    return insertedUser;
  };

  setUserImage = async (user_id: string, image: string) => {
    const user = await User.findOne({ _id: user_id });
    if (!user) throw new BadRequestError("Usuário não encontrado");

    user.image = image;

    user.save();
  };

  loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email: email, password: password });

    if (!user) throw new BadRequestError("Credenciais erradas!");

    return user;
  };
}

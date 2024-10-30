import jwt from "jsonwebtoken";

export class JwtServices {
  createToken = (user_id: string) => {
    const token = jwt.sign({ user_id: user_id }, "senha", {
      expiresIn: "2h",
    });

    return token;
  };
}

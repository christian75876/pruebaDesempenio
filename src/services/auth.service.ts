import { inject, injectable } from "tsyringe";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import JWT_SECRET from "../config/jwt";
import { UserReppository } from "../repositories";
dotenv.config();

@injectable()
export class AuthServices {
  constructor(
    @inject(UserReppository) private userRepository: UserReppository
  ) {}

  async login(email: string, password: string): Promise<string | null> {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user || !(user.password === password)) {
      return null;
    }
    const token = jwt.sign(
      { userId: user.id, roleId: user.role },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return token;
  }
}

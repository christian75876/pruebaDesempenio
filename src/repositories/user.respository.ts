import { injectable } from "tsyringe";
import { User } from "../model";
import { IUser } from "../interface";


@injectable()
export class UserReppository {
    async createUser({email, password, role} : IUser): Promise<User>{
        const user = await User.create({ email, password, role });
        return user;
    };

    async getUserById(id: number): Promise<User | null> {
        return User.findByPk(id);
      }

      async getAll(): Promise<User[]> {
        return User.findAll();
      }

      async deleteUser(id: number): Promise<void> {
        await User.destroy({ where: { id } });
      }
    
      async updateUser(id: number, user: IUser): Promise<void> {
        await User.update(user, { where: { id } });
      }
      async getUserByEmail(email: string): Promise<User | null> {
        const user = await User.findOne({ where: { email } });
        return user
      }
    
}
import { inject, injectable } from "tsyringe";
import { UserReppository } from "../repositories/user.respository";
import { User } from "../model";
import { IUser } from "../interface";


@injectable()
export class UserService {
    constructor(@inject(UserReppository) private userReppository: UserReppository) { }
    
    async createUser({ email, password, role }: IUser): Promise<User> {
        return await this.userReppository.createUser({ email, password, role });
    };

    
    async getAllUsers(): Promise<User[]> {
        return await this.userReppository.getAll();
    };

    async getUserById(id: number): Promise<User | null> {
        return await this.userReppository.getUserById(id);
    };

    
    async deleteUser(id: number): Promise<void> {
        return await this.userReppository.deleteUser(id)
    };

    async updateUser(id: number, user: IUser): Promise<void> {
        return await this.userReppository.updateUser(id, user)
    };

}
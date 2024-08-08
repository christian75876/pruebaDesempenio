import { container } from "tsyringe";
import { UserService } from "../services";
import { UserController } from "../controllers";
import { UserReppository } from "../repositories";



container.register(UserService, { useClass: UserService});
container.register(UserController, { useClass: UserController});
container.register(UserReppository, { useClass: UserReppository});
import { Router } from "express";
import { UserController } from "../controllers";
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware";

const userRouter = Router();


userRouter.get("/",authorizationMiddleware('get',"users") ,UserController.getAllUsers);
userRouter.get("/:id",authorizationMiddleware('get',"users"), UserController.getUserById);
userRouter.post("/",authorizationMiddleware('create',"users"), UserController.createUser);
userRouter.delete("/:id",authorizationMiddleware('delete',"users"), UserController.deleteUser);
userRouter.put("/:id",authorizationMiddleware("update","users"), UserController.updateUser);
// userRouter.get("/:id/orders",authorizationMiddleware('get',"users"),OrderController.getOrderByUser)

export default userRouter;
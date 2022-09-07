import { routerHelpers } from "../../utils/index.js";
import createUser from "./create-user.js";
import getUser from "./get-user.js";



const basePath = "/users";

const routes = [
  {
    method: "GET",
    path: "/",
    controller: getUser.getUsers,
  },
  {
    method: "GET",
    path: "/:id",
    controller: getUser.getUserById,
  },
  {
    method: "GET",
    path: "/email/:email",
    controller: getUser.getUserByEmail,
  },
  {
    method: "POST",
    path: "/",
    controller: createUser,
  },
];

const handler = routerHelpers.initControllerRoutes(routes);

const userController =  {
    handler,
    basePath
}
export default userController;
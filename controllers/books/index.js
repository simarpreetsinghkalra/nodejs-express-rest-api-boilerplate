import { routerHelpers } from "../../utils/index.js";
import createBook from "./create-book.js";



const basePath = "/books";

const routes = [
  {
    method: "POST",
    path: "/",
    controller: createBook,
  },
];

const handler = routerHelpers.initControllerRoutes(routes);

const booksController =  {
    handler,
    basePath
}
export default booksController;
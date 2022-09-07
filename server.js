import bodyParser from "body-parser";
import initApp from "./app.js";
import { booksController, userController } from "./controllers/index.js";

const middlewares = [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
];

const controllers = [
    userController,
    booksController,
];

const app = initApp(middlewares, controllers);

const port = process.env.PORT || 8000;


app.listen(port, () => {
  console.log(`Server is running on port : ${port}!`);
});

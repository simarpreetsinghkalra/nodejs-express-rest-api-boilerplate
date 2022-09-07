import { Router } from "express";

const initControllerRoutes = (routes) => {
    const router = Router();
    routes.forEach((route) => {
        switch (route.method) {
          case "GET":
            router.get(route.path, route.controller);
            break;
          case "POST":
            router.post(route.path, route.controller);
            break;
          case "PATCH":
            router.patch(route.path, route.controller);
            break;
          case "PUT":
            router.put(route.path, route.controller);
            break;
          case "DELETE":
            router.delete(route.path, route.controller);
            break;
          default:
            console.log("return error");
        }
      });
      return router;
};




const routerHelpers = {
    initControllerRoutes,
}

export default routerHelpers;
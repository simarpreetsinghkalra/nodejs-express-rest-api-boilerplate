import express from 'express';

const baseApiPath = '/api';
const initApp = (middlewares, controllers) => {
    const app = express();
    middlewares.forEach(middleware => {
        app.use(middleware);
    });
    controllers.forEach(controller => {
        app.use(baseApiPath + controller.basePath, controller.handler);
    });
    return app;
}

export default initApp;
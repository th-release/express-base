import * as express from 'express';
import * as skio from 'socket.io'
import { AppController } from './app/app.controller';
export default class App {
  public router: express.Application;
  public io: skio.Server | undefined;

  constructor(app: express.Application) {
    this.router = app;
    this.controllerInit();
    this.start();
  }

  private controllerInit(): void {
    console.log("controller Init Success");

    const controllers = [new AppController('/')];

    controllers.forEach((controller) => {
      const controllerRouter: express.Router = controller.getRouter();
      this.router.use('/api', controllerRouter);
    })
  }

  private start(): void {
    const express_server = this.router.listen(process.env.PORT ?? 3000, () => {
      console.log(`Server is running on port: ${process.env.PORT ?? 3000}`)
    });

    this.io = new skio.Server(express_server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      }
    });
  }
}
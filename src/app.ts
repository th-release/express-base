import * as express from 'express';
import * as skio from 'socket.io'
import { AppController } from './app/app.controller';
import SocketTerminal from './socket/socket.terminal';

const controllers = [new AppController('/')]

export default class App {
  public router: express.Application;
  public io: skio.Server | undefined;

  constructor(app: express.Application) {
    this.router = app;
    this.controllerInit();
    this.start();
    this.socketInit();
  }

  private controllerInit(): void {
    try {
      controllers.forEach((controller) => {
        const controllerRouter: express.Router = controller.getRouter();
        this.router.use('/api', controllerRouter);
      })
    } catch (err) {
      console.error('controller Init Error:' + err)
      return process.exit(1);
    }

    console.log("controller Init Success");
  }

  private socketInit(): void {
    this.io?.on('connection', (socket: skio.Socket) => {
      new SocketTerminal(socket);
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

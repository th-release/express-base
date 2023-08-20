import * as skio from 'socket.io'
import SocketService from './socket.service';

export default class SocketGateway {
  public socket: skio.Socket;
  private socketService: SocketService = new SocketService();

  constructor(socket: skio.Socket) {
    this.socket = socket;
    this.initializeSocket()
  }

  private initializeSocket(): void {
    this.socket.on("hello", () => {
      this.socketService.responseData(this.socket);
    })
  }
}

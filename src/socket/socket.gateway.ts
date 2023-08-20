import * as skio from 'socket.io'

export default class SocketGateway {
  public socket: skio.Socket;

  constructor(socket: skio.Socket) {
    this.socket = socket;
    this.initializeSocket()
  }

  private initializeSocket(): void {
    this.socket.on("hello", () => {
      this.socket.emit("data", "world")
    })
  }
}

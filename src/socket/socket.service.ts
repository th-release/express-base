import skio from 'socket.io'

export default class SocketService {
  public responseData(socket: skio.Socket): void {
    socket.emit("data", "world")
    return
  }
}

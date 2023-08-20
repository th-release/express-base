import { Request, Response } from "express";

export default class AppService {
  public getStatus(res: Response): void {
    res.send({
      status: true
    });

    return
  }
}
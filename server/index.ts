import config from "./config"
import express, { Express } from "express"
import { Api } from "../api"

export class Server {
    private port: number
    private app: Express

    public constructor() {
        this.port = config.port
        this.app = express()
        this.init()
    }

    public init(): void {
        new Api<Express>(this.app)
        this.app.listen(this.port, () => console.log(this.port))
    }
}
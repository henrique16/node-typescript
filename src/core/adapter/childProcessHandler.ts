import { ProcessHandler } from "../interface/processHandler"
import fs from "fs"

export class ChildProcessHandler implements ProcessHandler {
    private path: string

    public constructor(path: string) {
        this.path = path
    }

    public async getThreads(): Promise<number> {
        try {
            const result: string = fs.readFileSync(this.path, "utf-8")
            const splited: string[] = result.split("\n")
            const threads: number = parseInt(splited[1])
            return Promise.resolve(threads)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
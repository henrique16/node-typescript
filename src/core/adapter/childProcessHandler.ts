import { ProcessHandler } from "../interface/processHandler"
import { execSync } from "child_process"
import fs from "fs"

export class ChildProcessHandler implements ProcessHandler {
    public path: string = process.env.THREADS_FILE ? process.env.THREADS_FILE : ""

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
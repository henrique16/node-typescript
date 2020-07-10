import { ProcessHandler } from "../interface/processHandler"
import { execSync } from "child_process"
import fs from "fs"

export class ChildProcessHandler implements ProcessHandler {
    public path: string = process.env.THREADS_FILE ? process.env.THREADS_FILE : ""

    public async getThreads(): Promise<number> {
        try {
            const result: string = fs.readFileSync(this.path, "utf-8")
            const threads: number = parseInt(result)
            return Promise.resolve(threads)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }

    public setJanusThreads(): Promise<void> {
        try {
            const command: string = "pid=$(pgrep janus); ps -o nlwp --pid $pid"
            const result: string[] = execSync(command).toString("utf-8").split("\n")
            const threads: number = parseInt(result[1])
            fs.writeFileSync(this.path, threads.toString())
            return Promise.resolve()
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
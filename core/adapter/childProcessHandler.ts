import { ProcessHandler } from "../interface/processHandler"
import { execSync } from "child_process"

export class ChildProcessHandler implements ProcessHandler {
    public getThreads(): number {
        try {
            const command: string = "pid=$(pgrep janus); ps -o nlwp --pid $pid"
            const result: string[] = execSync(command).toString("utf-8").split("\n")
            const threads: number = parseInt(result[1])
            return threads
        }
        catch (error) {
            console.error(error)
            return -1
        }
    }
}
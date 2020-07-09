import { GetThreads } from "../usecase/getThreads"
import { ProcessHandler } from "../interface/processHandler"
import { ChildProcessHandler } from "../adapter/childProcessHandler"

export function getThreads(): number {
    const processHandler: ProcessHandler = new ChildProcessHandler()
    return new GetThreads(processHandler).get()
}
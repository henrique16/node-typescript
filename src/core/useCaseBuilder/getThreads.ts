import { GetThreads } from "../usecase/getThreads"
import { ProcessHandler } from "../interface/processHandler"
import { ChildProcessHandler } from "../adapter/childProcessHandler"

export function getThreads() {
    const processHandler: ProcessHandler = new ChildProcessHandler()
    return new GetThreads(processHandler).get()
}
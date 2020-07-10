import { GetThreads } from "../usecase/getThreads"
import { ProcessHandler } from "../interface/processHandler"
import { ChildProcessHandler } from "../adapter/childProcessHandler"

export function getThreads(path: string) {
    const processHandler: ProcessHandler = new ChildProcessHandler(path)
    return new GetThreads(processHandler).get()
}
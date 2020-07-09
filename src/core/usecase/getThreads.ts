import { ProcessHandler } from "../interface/processHandler"

export class GetThreads {
    private processHandler: ProcessHandler

    public constructor(processHandler: ProcessHandler) {
        this.processHandler = processHandler
    }

    get(): number {
        return this.processHandler.getThreads()
    }
}
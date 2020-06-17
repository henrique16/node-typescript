import { GetThreads } from "../core/usecase/getThreads"

export class Api<T> {
    private app: any
    private getThreads: GetThreads

    public constructor(app: T, getThreads: GetThreads) {
        this.app = app
        this.getThreads = getThreads
        this.init()
    }

    public init(): void {
        this.app.get("/", (req: any, res: any, next: any) => {
            const threads: number =  this.getThreads.getThreads()
            res.status(200).send({ threads: threads })
        })
    }
}
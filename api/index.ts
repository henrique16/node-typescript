import { GetThreadsService } from "../service/getThreadsService"

export class Api<T> {
    private app: any

    public constructor(app: T) {
        this.app = app
        this.init()
    }

    public init(): void {
        this.app.get("/", (req: any, res: any, next: any) => {
            const threads: number =  new GetThreadsService().getThreads()
            res.status(200).send({ threads: threads })
        })
    }
}
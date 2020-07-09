import { Connector } from "../connector"
import { ConnectionPool, IProcedureResult, IRecordSet } from "mssql"

export class SessionSchema {
    public async execAllProcs(procs: string): Promise<IRecordSet<any>[]> {
        try {
            const connectionPool: ConnectionPool = await new Connector().connect()
            const result: IProcedureResult<any> = await connectionPool.request()
                .input("proc", procs)
                .execute("SPExecAllProcs")
            return Promise.resolve(result.recordsets)
        }
        catch (error) { 
            return Promise.reject(error)
        }
    }
}
import mssql from "mssql"
import config from "./config"

export class Connector {
    public connect(): Promise<mssql.ConnectionPool> {
        const connectionPool: mssql.ConnectionPool = new mssql.ConnectionPool(config, (error) => {
            if (error) return error
        })
        return connectionPool.connect()
    }
}
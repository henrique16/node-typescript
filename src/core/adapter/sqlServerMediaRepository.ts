import { MediaRepository } from "../interface/mediaRepository"
import { Session } from "../domain/session"
import { SessionSchema } from "../database/sqlServer/schema/sessionSchema"
import { IRecordSet } from "mssql"

export class SqlServerMediaRepository implements MediaRepository {
    public async getSavedSessions(sessions: Session[]): Promise<Session[]> {
        try {
            const sessionSchema: SessionSchema = new SessionSchema()
            var procs: string = ""
            for (let session of sessions) {
                procs += `exec EXCLUIR1 ${session.id}\n`
            }
            const result: IRecordSet<any>[] = await sessionSchema.execAllProcs(procs)
            const response: Session[] = []
            for (let iterator of result) {
                if (iterator.length > 0) {
                    response.push(iterator[0].sessionId)
                }
            }
            return Promise.resolve(response)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
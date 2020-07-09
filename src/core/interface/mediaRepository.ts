import { Session } from "../domain/session"

export interface MediaRepository {
    getSavedSessions(sessions: Session[]): Promise<Session[]>
}
import { Session } from "../domain/session"

export interface FileHandler {
    getFileNames(path: string): Promise<Session[]>
    deleteFile(path: string): Promise<void>
}
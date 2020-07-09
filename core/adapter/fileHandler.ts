import { FileHandler } from "../interface/fileHandler"
import { Session } from "../domain/session"
import { promisify } from "util"
import fs from "fs"
import rimraf from "rimraf"

export class FileHandlerAdapter implements FileHandler {
    public getFileNames(path: string): Promise<Session[]> {
        try {
            const fileNames: string[] = fs.readdirSync(path, "utf-8")
            const sessions: Session[] = []
            for (let fileName of fileNames) {
                sessions.push(new Session(parseInt(fileName)))
            }
            return Promise.resolve(sessions)
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
    public async deleteFile(path: string): Promise<void> {
        try {
            const rimrafSync = promisify(rimraf)
            await rimrafSync(path)
            return Promise.resolve()
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
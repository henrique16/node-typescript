import { Session } from "../domain/session"
import { FileHandler } from "../interface/fileHandler"
import { MediaRepository } from "../interface/mediaRepository"

export class DeleteSavedMedia {
    private path: string
    private fileHandler: FileHandler
    private mediaRepository: MediaRepository

    public constructor(path: string, fileHandler: FileHandler, mediaRepository: MediaRepository) {
        this.path = path
        this.fileHandler = fileHandler
        this.mediaRepository = mediaRepository
    }

    public async delete(): Promise<void> {
        try {
            const fileNames: Session[] = await this.fileHandler.getFileNames(this.path)
            const result: Session[] = await this.mediaRepository.getSavedSessions(fileNames)
            if (result.length === 0) throw "there are no files to delete"
            for (let session of result) {
                this.fileHandler.deleteFile(`${this.path}/${session.id}`)
            }
            return Promise.resolve()
        }
        catch (error) {
            return Promise.reject(error)
        }
    }
}
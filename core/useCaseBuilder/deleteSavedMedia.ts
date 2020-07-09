import { DeleteSavedMedia } from "../usecase/deleteSavedMedia"
import { FileHandlerAdapter } from "../adapter/fileHandler"
import { FileHandler } from "../interface/fileHandler"
import { MediaRepository } from "../interface/mediaRepository"
import { SqlServerMediaRepository } from "../adapter/sqlServerMediaRepository"

export function deleteSavedMedia(path: string): Promise<void> {
    const fileHandler: FileHandler = new FileHandlerAdapter()
    const mediaRepository: MediaRepository = new SqlServerMediaRepository()
    return new DeleteSavedMedia(path, fileHandler, mediaRepository).delete()
}
import { deleteSavedMedia } from "../useCaseBuilder/deleteSavedMedia"

export default function (path: string): Promise<void> {
    return deleteSavedMedia(path)
}
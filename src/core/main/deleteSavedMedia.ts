import { deleteSavedMedia } from "../useCaseBuilder/deleteSavedMedia"

export default function (path: string) {
    return deleteSavedMedia(path)
}
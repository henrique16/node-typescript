import { getThreads } from "../useCaseBuilder/getThreads"

export default function () {
    const path: string = process.env.THREADS_FILE ? process.env.THREADS_FILE : ""
    return getThreads(path)
}
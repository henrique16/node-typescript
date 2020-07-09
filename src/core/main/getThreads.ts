import { getThreads } from "../useCaseBuilder/getThreads"

export default function (): number {
    return getThreads()
}
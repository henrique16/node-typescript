export interface ProcessHandler {
    getThreads(): Promise<number>
}
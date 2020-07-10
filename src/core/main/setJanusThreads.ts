import { ChildProcessHandler } from "../adapter/childProcessHandler"

export default function () {
    const childProcessHandler: ChildProcessHandler = new ChildProcessHandler()
    childProcessHandler.setJanusThreads()
        .then(() => console.log("succefully set janus threads"))
        .catch(error => console.log(error))
}
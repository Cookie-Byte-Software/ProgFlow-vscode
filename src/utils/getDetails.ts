import * as vscode from 'vscode'
import * as os from 'os'

export class Utils {
    getLanguages() {
        let names: string[] = []

        const openedEditor = vscode.window.visibleTextEditors

        openedEditor.map(editor => names.push(editor.document.languageId))
        return names
    }

    getProject() {
        if(vscode.workspace.workspaceFolders){
            return vscode.workspace.workspaceFolders[0].name
        }
        return 'No Folder Opened'
    }

    getOS() {
        if(process.platform === "win32"){
            return "Windows"
        } else if(process.platform === "linux") {
            return "Linux"
        } else if(process.platform === "darwin") {
            return "macOS"
        } else {
            return "unknown"
        }
    }

    getComputerName() {
        try {
            return os.hostname()
        } catch (e) {
            throw new Error('Could not get computer name')
        }
    }
}
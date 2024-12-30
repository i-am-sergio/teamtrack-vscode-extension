import * as vscode from 'vscode';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('teamtrack.helloWorld', async () => {
        // Verificar si hay una carpeta abierta
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders || workspaceFolders.length === 0) {
            vscode.window.showErrorMessage('No workspace folder is open. Please open a folder to use this command.');
            return;
        }

        // Obtener el nombre de la carpeta del proyecto abierto
        const projectFolder = workspaceFolders[0].name;

        // Mostrar el mensaje en VSCode
        const message = `TeamTrack Tool Init on http://localhost:3000/${projectFolder}/main`;
        vscode.window.showInformationMessage(message);

        // Importar dinámicamente el módulo 'open' y abrir la URL
        const open = (await import('open')).default;
        open(`http://localhost:3000/${projectFolder}/main`);
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand("extension.pushWithHook", function () {
    const terminal = vscode.window.createTerminal("Git Push");
    terminal.show(true);
    terminal.sendText("git push");
  });
  let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.text = "$(cloud-upload) Push with Hook";
  statusBarItem.command = "extension.pushWithHook";
  statusBarItem.tooltip = "Run git push with pre-push hook";
  statusBarItem.show();
  context.subscriptions.push(statusBarItem);
  // Register the command
  context.subscriptions.push(disposable);
}
vscode.window.showInformationMessage("Push with Hook extension is active");

function deactivate() {}

module.exports = {activate, deactivate};

const vscode = require("vscode");

function activate(context) {
  const interval = setInterval(() => {
    vscode.workspace.textDocuments.forEach((doc) => {
      if (doc.fileName.includes("/.nuxt/") && doc.isDirty) {
        console.log("Polling: auto-saving", doc.fileName);
        doc.save();
      }
    });
  }, 1000); // every second

  context.subscriptions.push({dispose: () => clearInterval(interval)});
}

function deactivate() {}

module.exports = {activate, deactivate};

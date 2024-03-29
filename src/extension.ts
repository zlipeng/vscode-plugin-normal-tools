// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getWebviewContent, getWebviewContentJuejin } from './content';
import { MyProvider } from './provider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension is now active!');

	vscode.commands.registerCommand('weibo-vscode.start', () => {
		const panel = vscode.window.createWebviewPanel(
			'weibo', // Identifies the type of the webview. Used internally
			'微博', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{
				enableScripts: true,
				retainContextWhenHidden: true
			} // Webview options. More on these later.
		);

		panel.webview.html = getWebviewContent();
	});

	vscode.commands.registerCommand('juejin-vscode.start', () => {
		const panel = vscode.window.createWebviewPanel(
			'juejin', // Identifies the type of the webview. Used internally
			'掘金', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{
				enableScripts: true,
				retainContextWhenHidden: true
			} // Webview options. More on these later.
		);

		panel.webview.html = getWebviewContentJuejin();
	})

	vscode.window.createTreeView('list', {
		treeDataProvider: new MyProvider(context)
	});

	context.subscriptions.push();
}

// this method is called when your extension is deactivated
export function deactivate() {}

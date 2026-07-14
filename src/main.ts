import { argv } from "node:process";
import { startRepl } from "./repl.js";
import { initState } from "./init_state.js";
import { getTerminalCommands, TerminalCommand } from "./terminal_commands.js";

function main() {
	parse_argv();
}

function parse_argv() {
	let command = argv[0].toLocaleLowerCase();
	if (command === undefined) {
		console.log("Usage personalai <command>:")
		command = "help";
		return;
	}

	const terminalCommands: Record<string, TerminalCommand> = getTerminalCommands();

	switch(command) {
		case "help":
			terminalCommands[command].callback();
			break;
		case "cli":
			initState();
			startRepl();
			break;
		default:
			command = "help";
			terminalCommands[command].callback();
			break;
	}	
}

main();

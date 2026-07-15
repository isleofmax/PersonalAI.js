import { Command } from "commander";
import { initState } from "./init_state.js";
import { getTerminalCommands, } from "./terminal_commands.js";

function main() {
	parse_argv();
}

function parse_argv() {
	getTerminalCommands().parse();
}

main();

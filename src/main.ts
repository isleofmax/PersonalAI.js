import { initConfig, Configuration } from "./config.js";
import { getTerminalCommands, } from "./terminal_commands.js";

function main() {
	parse_argv();
}

function parse_argv() {
	const config = initConfig();
	getTerminalCommands(config).parse();
}

main();

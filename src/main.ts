import { initConfig, Configuration } from "./config.js";
import { getTerminalCommands, } from "./terminal_commands.js";

function main() {
	parse_argv();
}

function parse_argv() {
	const config = initConfig();
	if (!config) {
		process.exit(1);
	}
	getTerminalCommands(config).parse();
}

main();

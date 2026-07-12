import { argv } from "node:process";
import { repl } from "./repl.js";

function main() {
	parse_argv();
}

function parse_argv() {
	const command = argv[0].toLocaleLowerCase();
	if (command === undefined) {
		console.log("Usage personalai <command>:")
		print_help();
		return;
	}

	switch(command) {
		case "help":
			print_help();
			break;
		case "cli":
			repl();
			break;
		default:
			console.log("Unknown command");
			print_help();			
	}	
}

function print_help() {

}

main();

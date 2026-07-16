import { Command } from "commander";
import { Configuration } from "./config.js";
import { tcommandRepl } from "./tcommand_repl.js";

export function getTerminalCommands(config: Configuration): Command {
    const program = new Command();
    program
        .command("repl")
        .description("Access the repl")
        .action(() => {
            tcommandRepl(config);
        });

    return program;
}
import { Command } from "commander";
import { tcommandRepl } from "./tcommand_repl.js";

export function getTerminalCommands(): Command {
    const program = new Command();
    program
        .command("repl")
        .description("Access the repl")
        .action((str: string, options: Command) => {
            tcommandRepl();
        });

    return program;
}
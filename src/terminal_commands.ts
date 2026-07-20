import { Command } from "commander";
import { Configuration } from "./config.js";
import { tcommandRepl } from "./tcommand_repl.js";
import { tcommandDownload } from "./tcommand_download.js";

export function getTerminalCommands(config: Configuration): Command {
    const program = new Command();
    program
        .command("repl")
        .description("Access the repl")
        .action(() => {
            tcommandRepl(config);
        });

    program
        .command("download <name of LLM>")
        .description("Download the LLM passed by argument")
        .action(() => {
            tcommandDownload(config);
        });

    return program;
}
import { startRepl } from "./repl.js";
import { Command } from "commander";

export function tcommandRepl(str: string, options: Command) {
    startRepl();
}
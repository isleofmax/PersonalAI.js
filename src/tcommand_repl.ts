import { startRepl } from "./repl.js";
import { Configuration } from "./config.js";

export function tcommandRepl(config: Configuration) {
    startRepl(config);
}
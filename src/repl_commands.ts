import { replCommandHelp } from "./rcommand_help.js";
import { replCommandQuit } from "./rcommand_quit.js";

export function getReplCommands() {
    return {
        help: {
            name: "/help",
            description: "Help command",
            callback: replCommandHelp,
        },
        quit: {
            name: "/quit",
            description: "Quit the repl",
            callback: replCommandQuit,
        },
    };
}

export type ReplCommand = {
    name: string;
    description: string;
    callback: () => void;
};
import { terminalCommandHelp, terminalCommandDesc } from "./tcommand_help.js";

export function getTerminalCommands() {
    return {
        help: {
            name: "help",
            description: terminalCommandDesc,
            callback: terminalCommandHelp
        },
    };
}

export type TerminalCommand = {
    name: string;
    description: () => string;
    callback: () => void;
};
import { getTerminalCommands, TerminalCommand } from "./terminal_commands.js";

export function terminalCommandDesc() {
    return "Help command";
}

export function terminalCommandHelp() {
    const commands: Record<string, TerminalCommand> = getTerminalCommands();
    for (let key in commands) {
        console.log(commands[key].description());
    }
}

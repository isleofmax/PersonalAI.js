import { getReplCommands, ReplCommand } from "./repl_commands.js";

export function replCommandHelp() {
    const commands: Record<string, ReplCommand> = getReplCommands();
    for (let key in commands) {
        console.log(`/${key}: ${commands[key].description}`);
    }
}
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline";
import { getReplCommands, ReplCommand } from "./repl_commands.js";

export function repl() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "personal-ai> "
    });

    console.log("Welcome to PersonalAI.js repl");
    console.log("Type /help for available commands");

    rl.prompt();
    rl.on("line", (line) => {
        const words = get_command(line);
        if (words.length === 0) {
            rl.prompt();
            return;
        }

        const command = words[0];
        const replCommands: Record<string, ReplCommand> = getReplCommands();

        try {
            if (command.substring(0,1) === "/") {
                const commandName = command.substring(1);
                if (replCommands[commandName]) {
                    replCommands[commandName].callback();
                } else {
                    console.log("unknow command");
                }
            } else {
                console.log("unknow command");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(`${error.message}`);
            } else {
                console.log(`${error}`);
            }
        }

        rl.prompt();
    });
}

function get_command(line: string) {
    return line.trim().toLowerCase().split(" ").filter((word) => word !== "");
}
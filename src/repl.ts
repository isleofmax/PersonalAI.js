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
        const words = getWords(line);
        if (words.length === 0) {
            rl.prompt();
            return;
        }

        const commandName = getCommand(words[0]);
        if (commandName === undefined) {
            console.log("Unknown command");
            rl.prompt();
            return;
        }

        const replCommands: Record<string, ReplCommand> = getReplCommands();

        try {
            if (replCommands[commandName]) {
                replCommands[commandName].callback();
            } else {
                console.log("Unknown command");
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

function getWords(line: string) {
    return line.trim().toLowerCase().split(" ").filter((word) => word !== "");
}

function getCommand(word: string): string | undefined {
    if (word.substring(0,1) === "/") {
        return word.substring(1);
    }

    return undefined;
}
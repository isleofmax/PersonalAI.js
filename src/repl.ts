import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline";

export function repl() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "personal-ai> "
    });

    rl.prompt();
    rl.on("line", (line) => {
        rl.prompt();
    });
}
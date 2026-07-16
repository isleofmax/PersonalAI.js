/*
 * Configuration object. This object will be write into .personalAI file
 * in your $HOME directory
 */

import { homedir } from "node:os";
import { existsSync } from "node:fs";

export function initConfig() {
    // check if configuration file exists
    const home = homedir();
    if (existsSync(`${home}/.personaAI`)) {
    }
    return {
        llamaExe: "",
        hugKey: "",
        llamaAddr: "",
        llamaPort: "",
        }
}

export type Configuration = {
    llamaExe: string;       //path to llama.cpp executable
    hugKey: string;         //HuggingFace Api Key
    llamaAddr: string;      //ip address of llama.cpp server
    llamaPort: string;      //port of llama.cpp server
}
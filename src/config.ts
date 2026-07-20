/*
 * Configuration object. This object will be write into .personalAI file
 * in your $HOME directory
 */

import { homedir } from "node:os";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

function writeDefaultConfig(configFile: string) {
    const configurationDefaultValues = {
        llamaExe: "",
        hugKey: "",
        llamaAddr: "",
        llamaPort: "",
        llmDir: ""
    };

    const data = JSON.stringify(configurationDefaultValues);
    try {
        writeFileSync(configFile, data);
    } catch (error) {
        throw Error("Cannot create configuration file");
    }
    return configurationDefaultValues;
}

function createConfigurationType(parsedData: any) {
    const configurationFileObj = {
        llamaExe: parsedData.llamaExe,
        hugKey: parsedData.hugKey,
        llamaAddr: parsedData.llamaAddr,
        llamaPort: parsedData.llamaPort,
        llmDir: parsedData.llmDir
    };

    return configurationFileObj;
}

export function initConfig(): Configuration | undefined {
    // check if configuration file exists
    const home = homedir();
    const configFile = `${home}/.personaAI`;
    let configData: Configuration; 
    if (existsSync(configFile)) {
        const data = readFileSync(configFile, "utf-8");
        const parsedData = JSON.parse(data);
        configData = createConfigurationType(parsedData);
    }

    try {
        configData = writeDefaultConfig(configFile);
        return configData;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            return undefined;
        }
    } 
}

export type Configuration = {
    llamaExe: string;       //path to llama.cpp executable
    hugKey: string;         //HuggingFace Api Key
    llamaAddr: string;      //ip address of llama.cpp server
    llamaPort: string;      //port of llama.cpp server
    llmDir: string;         //directory where are the downloaded llm's.
}
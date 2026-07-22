/*
 * Configuration object. This object will be write into .personalAI file
 * in your $HOME directory
 */

import { homedir } from "node:os";
import fs from "node:fs";
import path from "node:path";

export function getDefaultConfig(configFile: string) {
    const llmDir = path.dirname(configFile);
    return {
        hugKey: "",
        llamaAddr: "http://127.0.0.1",
        llamaPort: "8080",
        llmDir: llmDir,
    } as Configuration;
}

export function writeDefaultConfig(configFile: string) {
    const llmDir = path.dirname(configFile);
    if (!fs.existsSync(llmDir)) {
        fs.mkdirSync(llmDir, { recursive: true });
    }

    const configurationDefaultValues = getDefaultConfig(configFile);
    const data = JSON.stringify(configurationDefaultValues, undefined, "  ");
    try {
        fs.writeFileSync(configFile, data);
    } catch (error) {
        throw Error("Cannot create configuration file");
    }
    return configurationDefaultValues;
}

export function readConfigurationData(parsedData: any) {
    const configurationFileObj = {
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
    if (fs.existsSync(configFile)) {
        const data = fs.readFileSync(configFile, "utf-8");
        const parsedData = JSON.parse(data);
        configData = readConfigurationData(parsedData);
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
    hugKey: string;         //HuggingFace Api Key
    llamaAddr: string;      //ip address of llama.cpp server
    llamaPort: string;      //port of llama.cpp server
    llmDir: string;         //directory where are the downloaded llm's.
}
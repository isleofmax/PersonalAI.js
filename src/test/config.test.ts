import { expect, test, describe } from "vitest";
import { writeDefaultConfig, getDefaultConfig } from "../config.js";
import os from "node:os";
import fs from "node:fs";

describe ("Test config file", () => {
    const tmpDir = os.tmpdir();
    const configFile = `${tmpDir}/test.config.json`;
    const configFileWithDir = `${tmpDir}/dir1/dir2/test.config.json`

    test("create config file", () => {
        const defaultConfig = getDefaultConfig(configFile);
        const defaultConfigJson = JSON.stringify(defaultConfig, undefined, "  ");
        writeDefaultConfig(configFile);
        const expectedJson = fs.readFileSync(configFile, "utf-8");
        expect(expectedJson).toBe(defaultConfigJson);
    });


    test("make directory and create config file", () => {
        const defaultConfig = getDefaultConfig(configFileWithDir);
        const defaultConfigJson = JSON.stringify(defaultConfig, undefined, "  ");
        writeDefaultConfig(configFileWithDir);
        const expectedJson = fs.readFileSync(configFileWithDir, "utf-8");
        expect(expectedJson).toBe(defaultConfigJson);
    });

});

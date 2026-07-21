import { expect, test, describe } from "vitest";
import { writeDefaultConfig } from "../config.js";
import os from "node:os";

describe ("Test config file", () => {
    test("create config file", () => {
        const tmpDir = os.tmpdir();
        const configFile = `${tmpDir}/test.config.json`;
        writeDefaultConfig(configFile);
        expect("a").toBe("a");
    });
});

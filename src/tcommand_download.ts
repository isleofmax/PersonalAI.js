import { downloadFile } from "@huggingface/hub";
import { Configuration } from "./config.js";

export function tcommandDownload(config: Configuration) {
    const response = downloadGGUF();
    if (!response) {
        throw Error("File not found");
    } else {
        console.log("File downloaded");
    }
}

async function downloadGGUF(): Promise<Blob | null> {
    const response = await downloadFile({
        repo: "unsloth/phi-4-GGUF",
        path: "phi-4-q4_k_m.gguf"
    });
    return response;
}

export function getReplCommands() {
    return {
        help: {
            name: "/help",
            description: "Help command",
            callback: () => {},
        },
    };
}

export type ReplCommand = {
    name: string;
    description: string;
    callback: () => void;
};
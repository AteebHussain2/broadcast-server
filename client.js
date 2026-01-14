import readline from "readline";
import WebSocket from "ws";

const client = new WebSocket("ws://localhost:8080");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function connectToServer() {
    // Connect to server
    client.on("open", () => {
        client.send("Connected to server!");

        rl.setPrompt("> ");

        rl.on("line", (input) => {
            client.send(input);
            rl.prompt();
        });
    });

    // Listening for messages
    client.on("message", (data) => {
        console.log(data.toString());

        rl.prompt();
    });

    // Error handling
    client.on("error", (error) => {
        console.error("Websocket error:", error);
    });

    // Disconnect client
    client.on("close", () => {
        console.log("\n The server has been closed.");
        rl.close();
    });
};
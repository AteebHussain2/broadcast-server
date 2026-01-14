import { connectToServer } from "./client.js";
import createWebSocketServer from "./server.js";

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No arguments provided.");
} else if (args[0] === 'start') {
    console.log("Starting server...");
    createWebSocketServer(8080);
} else if (args[0] === 'connect') {
    console.log("Connecting to server...");
    connectToServer();
}
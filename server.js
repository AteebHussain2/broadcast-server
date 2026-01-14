import { WebSocketServer } from "ws";

// Generate random hexadecimal ID
const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();

export default function createWebSocketServer(port) {
    const wss = new WebSocketServer({ port });
    console.info('Listening on port: ', port);

    const activeConnections = new Map();

    wss.on('connection', (socket) => {
        const id = genRanHex(8);
        activeConnections.set(socket, { id });

        socket.send(`Connected with ID: ${id}`);
        socket.on('error', console.error);

        // Broadcast message
        socket.on("message", (data) => {
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN && client !== socket) {
                    const sender = activeConnections.get(socket);

                    console.log(`${sender.id} : ${data.toString()}`);
                    client.send(`${sender.id} : ${data}`);
                }
            });
        });
    });

    // Disconnect client
    wss.on("close", (socket) => {
        const user = activeConnections.get(socket);
        activeConnections.delete(socket);

        console.log(`\n ${user.id} disconnected`);
    });
}
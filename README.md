# WebSocket Server with Temporary ID

## Overview
This project implements a WebSocket server that handles client connections, broadcasts messages, and ensures each client has a unique temporary ID.

## Features
* Temporary ID Assignment: Each client receives a unique temporary HEX 8 digit ID.
* Broadcast Messaging: Messages sent by any client are broadcasted to all other connected clients, prefixed with the sender's ID.
* Connection Tracking: Keeps track of connected clients with their IDs.

Setup
Prerequisites
Node.js (v14 or later recommended)

Installation
Clone the Repository:
```
git clone https://github.com/AteebHussain2/Broadcast-Server-Roadmap.sh-Intermedia-Project.git
cd Broadcast-Server-Roadmap.sh-Intermedia-Project
```
Install Dependencies:
```
npm install
```
Start the Server:
```
node broadcast-server start
```
To join as a client:
```
node broadcast-server connect
```

Usage
* Assigning IDs: Upon connecting, clients receive a unique temporary ID.
* Broadcasting Messages: Messages are prefixed with the sender’s ID and sent to all other clients.

A solution to the broadcast server project created by roadmapsh https://roadmap.sh/projects/broadcast-server
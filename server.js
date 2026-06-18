const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

let rooms = {};

wss.on("connection", (ws) => {

    ws.on("message", (message) => {

        let data = JSON.parse(message);

        // JOIN ROOM
        if(data.type === "join"){

            ws.username = data.name;
            ws.room = data.room;

            if(!rooms[data.room]) rooms[data.room] = [];

            rooms[data.room].push(ws);

            broadcastRoom(data.room, {
                type:"system",
                msg:`${data.name} a rejoint la salle`
            });
        }

        // CHAT MESSAGE
        if(data.type === "chat"){

            broadcastRoom(ws.room, {
                type:"chat",
                name: ws.username,
                msg: data.msg
            });
        }

        // MATCHMAKING
        if(data.type === "match"){

            let room = findAvailableRoom();

            ws.send(JSON.stringify({
                type:"match_found",
                room
            }));
        }
    });

    ws.on("close", () => {
        removeUser(ws);
    });
});

// BROADCAST ROOM
function broadcastRoom(room, data){

    if(!rooms[room]) return;

    rooms[room].forEach(client => {
        if(client.readyState === 1){
            client.send(JSON.stringify(data));
        }
    });
}

// MATCHMAKING SIMPLE
function findAvailableRoom(){

    let roomName = "room_" + Math.floor(Math.random()*1000);

    rooms[roomName] = [];

    return roomName;
}

// CLEAN
function removeUser(ws){

    if(!ws.room) return;

    rooms[ws.room] = (rooms[ws.room] || []).filter(c => c !== ws);
}

console.log("🚀 WebSocket server running on ws://localhost:3000");

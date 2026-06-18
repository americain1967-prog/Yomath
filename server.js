const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
cors: { origin: "*" }
});

// 🌍 CHAT MONDIAL
io.on("connection", (socket) => {

console.log("User connected:", socket.id);

// 💬 CHAT GLOBAL
socket.on("chat", (data) => {
io.emit("chat", data);
});

// ⚔️ DUEL
socket.on("duel", (data) => {
io.emit("duel", data);
});

// 🏆 SCORE GLOBAL
socket.on("score", (data) => {
io.emit("score", data);
});

// 🤖 IA QUESTION GENERATOR
socket.on("ai_question", (data) => {
let questions = [
"2 + 2 = ?",
"5 x 3 = ?",
"Physique: unité énergie ?"
];

let q = questions[Math.floor(Math.random()*questions.length)];

socket.emit("ai_response", q);
});

});

server.listen(3000, () => {
console.log("Server running on port 3000");
});

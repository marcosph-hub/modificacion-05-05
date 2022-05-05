"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const net = __importStar(require("net"));
const server = net.createServer((connection) => {
    console.log('A client has connected.');
    const firstData = '{"type": "change", "prevSize": 13';
    const secondData = ', "currSize": 27}\n';
    connection.write(firstData);
    const timer = setTimeout(() => {
        connection.write(secondData);
        connection.end();
    }, 500);
    connection.on('end', () => {
        clearTimeout(timer);
    });
    connection.on('close', () => {
        console.log('A client has disconnected');
    });
});
server.listen(60300, () => {
    console.log('Waiting for clients to connect.');
});

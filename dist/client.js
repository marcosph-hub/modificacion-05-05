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
const clientEventClass_1 = require("./clientEventClass");
//const cat = spawn('cat', ['-n', `${filename}`]);
let filename = "";
if (process.argv.length !== 3) {
    console.log('Please, provide a filename.');
}
else {
    filename = process.argv[2];
    const CLIENT = new clientEventClass_1.ClientEventEmitter(net.connect({ port: 60300 }));
    const CLIENT_MESSAGE = {
        command: "cat",
        options: "-n",
        filename: filename
    };
    const JSON_CLIENT_MESSAGE = JSON.stringify(CLIENT_MESSAGE, null, 1);
    CLIENT.getServerConection().write(JSON_CLIENT_MESSAGE);
    let commandMessage = "";
    CLIENT.getServerConection().on('data', (SERVER_BUFFER) => {
        commandMessage += SERVER_BUFFER;
        const COMMAND_MESSAGE_ARRAY = commandMessage.split(/\s+/);
        console.log(`Number of lines: ${COMMAND_MESSAGE_ARRAY[1]}`);
        console.log(`File content:`);
        for (let index = 2; index < COMMAND_MESSAGE_ARRAY.length; index++) {
            console.log(COMMAND_MESSAGE_ARRAY[index]);
        }
    });
    CLIENT.getServerConection().on('end', () => {
    });
}
/*
/*
const client = net.connect({port: 60300});

let wholeData = '';
client.on('data', (dataChunk) => {
  wholeData += dataChunk;
});

client.on('end', () => {
  const message = JSON.parse(wholeData);

  if (message.type === 'watch') {
    console.log(`Connection established: watching file ${message.file}`);
  } else if (message.type === 'change') {
    console.log('File has been modified.');
    console.log(`Previous size: ${message.prevSize}`);
    console.log(`Current size: ${message.currSize}`);
  } else {
    console.log(`Message type ${message.type} is not valid`);
  }
});


************************************************************
import * as net from 'net';

const client = net.connect({port: 60300});

client.on('data', (dataJSON) => {
  const message = JSON.parse(dataJSON.toString());

  if (message.type === 'watch') {
    console.log(`Connection established: watching file ${message.file}`);
  } else if (message.type === 'change') {
    console.log('File has been modified.');
    console.log(`Previous size: ${message.prevSize}`);
    console.log(`Current size: ${message.currSize}`);
  } else {
    console.log(`Message type ${message.type} is not valid`);
  }
})

*/

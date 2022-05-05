import * as net from 'net';
import {spawn} from 'child_process';
import { ClientEventEmitter } from './clientEventClass'

//const cat = spawn('cat', ['-n', `${filename}`]);

const CLIENT = new ClientEventEmitter(net.connect({port: 60300}));
const CLIENT_MESSAGE = '{"command": "cat", "options": "-n", "filename": filename}'
CLIENT.getServerConection().write(CLIENT_MESSAGE)
//CLIENT.emit('clientMessage',CLIENT_MESSAGE);



























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
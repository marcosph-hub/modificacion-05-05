import * as net from 'net';
import {watchFile} from 'fs';
import {spawn} from 'child_process';

net.createServer((connection => {
  console.log('A client has connected.');

  let JSON_CLIENT_MESSAGE = '';
  connection.on('data', (clientMessage) => {
    console.log(`Decoding client require`)
    JSON_CLIENT_MESSAGE = String(clientMessage);
    const CLIENT_MESSAGE = JSON.parse(JSON_CLIENT_MESSAGE);
    const JSONcommand = CLIENT_MESSAGE.command;
    const JSONoptions = CLIENT_MESSAGE.options;
    const JSONfilename = CLIENT_MESSAGE.filename;

    console.log(`Executing command ${JSONcommand}`);
    const cat = spawn (`${JSONcommand}`, [`${JSONoptions}`, `${JSONfilename}`]);
    let catOutput = "";
    cat.stdout.on('data', (catdata) => {
      catOutput += catdata;
      console.log(`Sending data to client ${catOutput}`)
      connection.write(catOutput)
    });
  });

  connection.on('end', () => {
    console.log("Message sended from server to client");
  });

})).listen(60300, () => {
  console.log('Waiting for clients to connect.')
});

























/*
if (process.argv.length !== 3) {
  console.log('Please, provide a filename.');
} else {
  const fileName = process.argv[2];

  net.createServer((connection) => {
    console.log('A client has connected.');

    connection.write(JSON.stringify({
      'type': 'watch',
      'file': fileName}) +
      '\n');

    watchFile(fileName, (curr, prev) => {
      connection.write(JSON.stringify({
        'type': 'change',
        'prevSize': prev.size, 
        'currSize': curr.size}) +
         '\n');
    });

    connection.on('close', () => {
      console.log('A client has disconnected.');
    });
  }).listen(60300, () => {
    console.log('Waiting for clients to connect.');
  });
}*/
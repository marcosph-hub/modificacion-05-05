import * as net from 'net';
import {watchFile} from 'fs';
import {spawn} from 'child_process';

net.createServer((connection => {
  console.log('A client has connected.');
   //connection.write()
   //let jsondata = '';
   connection.on('data', (clientMessage) => {
    const CLIENT_MESSAGE = JSON.stringify(clientMessage);
     //jsondata += clientMessage
     //consol
    
   });
   connection.on('end', () => {
    //const CLIENT_MESSAGE = JSON.parse(wholeData);
    /*const JSONcommand = CLIENT_MESSAGE.command;
    const JSONoptions = CLIENT_MESSAGE.options;
    const JSONfilename = CLIENT_MESSAGE.filename;*/

    //const cat = spawn (`${JSONcommand}`, [`${JSONoptions}`, `${JSONfilename}`])

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
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
    console.log('Waiting for clients to connect.');
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

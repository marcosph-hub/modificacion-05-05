/// <reference types="node" />
import { EventEmitter } from 'events';
import * as net from 'net';
export declare class ClientEventEmitter extends EventEmitter {
    private connection;
    constructor(connection: net.Socket);
    getServerConection(): net.Socket;
}

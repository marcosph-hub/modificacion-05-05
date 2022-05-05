import {EventEmitter} from 'events';
import * as net from 'net';


export class ClientEventEmitter extends EventEmitter {
    
    constructor(private connection: net.Socket) {
        //let ServerConection = connection;
        super();
    }
    getServerConection(){
        return this.connection
    }
}
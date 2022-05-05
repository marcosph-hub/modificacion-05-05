"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEventEmitter = void 0;
const events_1 = require("events");
class ClientEventEmitter extends events_1.EventEmitter {
    constructor(connection) {
        //let ServerConection = connection;
        super();
        this.connection = connection;
    }
    getServerConection() {
        return this.connection;
    }
}
exports.ClientEventEmitter = ClientEventEmitter;

/// <reference path="typings/index.d.ts" />
import {readFileSync} from 'fs';
import * as mongoose from "mongoose";
let conn = mongoose.createConnection('mongodb://localhost/ark');
//let db = mongoose.connection;
interface TorrentInfo extends mongoose.Document {
    hash: string;
    title: string;
    from: string;
    timestamp: number;
    torrent: string;
}
let _schema: mongoose.Schema = new mongoose.Schema({
    hash: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    from: {
        type: String,
        require: true
    },
    timestamp: {
        type: Number,
        require: true
    },
    torrent: {
        type: String,
        require: true
    }
});
let _model = mongoose.model<TorrentInfo>('torrent', _schema);
/**
 * ArkCURD
 */
class ArkCURD {
    constructor(parameters) {

    }
}
conn.once('open', () => {
    console.log("DB OK");
});
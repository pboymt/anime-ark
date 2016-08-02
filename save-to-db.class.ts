/// <reference path="typings/index.d.ts" />
import * as mongoose from "mongoose";
mongoose.connect('mongodb://localhost/ark');
var db = mongoose.connection;
interface TorrentInfo extends mongoose.Document {
    hash: string;
    title: string;
    from: string;
    timestamp: number;
    torrent: string;
}
var _schema: mongoose.Schema = new mongoose.Schema({
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
db.once('open', () => {
    console.log("DB OK");
});
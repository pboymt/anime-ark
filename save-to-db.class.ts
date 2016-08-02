/// <reference path="typings/index.d.ts" />
import * as mongoose from "mongoose";
mongoose.connect('mongodb://133.130.98.24/selflytv');
var db = mongoose.connection;
db.once('open', () => {
    console.log("DB OK");
});
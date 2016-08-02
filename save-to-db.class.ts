/// <reference path="typings/index.d.ts" />
import * as mongoose from "mongoose";
mongoose.connect('mongodb://localhost/selflytv');
var db = mongoose.connection;
db.once('open', () => {
    console.log("DB OK");
});
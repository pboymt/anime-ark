/// <reference path="typings/index.d.ts" />
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import {acgnxParser} from './acgnx.class';

https.get(acgnxParser.rssLink, (res) => {
    if (res.statusCode == 200) {
        let str: string = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            str += chunk;
        });
        res.on('end', () => {
            var acgnx = new acgnxParser(str, {
                type: "string"
            });
            console.log(acgnx.list);
        });
    }
});


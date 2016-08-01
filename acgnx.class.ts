import * as fs from 'fs';
import * as path from 'path';
import * as xml2js from 'xml2js';
import {listItem} from './list-item.class';
class acgnxParser {
    static rssLink: string = 'https://share.acgnx.se/rss.xml';
    private options;
    private raw: string;
    private XMLobj: Object;
    list: Object[];
    public constructor(str: string, options: Object) {
        let defaultSetting = {
            type: "string",
            strict: true
        };
        this.options = options ? options : defaultSetting;
        if (this.options.type == "file") {
            this.raw = fs.readFileSync(path.join(str)).toString();
            this.parseStr();
        } else if (this.options.type == "string") {
            this.raw = str;
            this.parseStr();
        } else if (this.options.type == "url") {
            console.log("Unsupport!");
            throw "Unsupport!";
        }
        this.toList();
        //console.log("is Sync");
    }
    private parseStr() {
        let Parser = new xml2js.Parser({ async: false, explicitArray: false });
        Parser.parseString(this.raw, (err, result) => {
            //console.log(result);
            this.XMLobj = result;
        });

    }
    toList() {
        this.list = [];
        let list = this.XMLobj['rss']['channel']['item'];
        for (let x in list) {
            let item: listItem;
            let linkurl: string;
            let hash: string;
            let title: string;
            let pubDate: number;
            linkurl = list[x]['link'];
            title = list[x]['title'];
            pubDate = Math.round(new Date(list[x]['pubDate']).getTime() / 1000);
            hash = linkurl.match(/[0-9a-z]{40}/)[0];
            item = {
                base: hash,
                from: 'acgnx',
                title: title,
                timestamp: pubDate,
                torrent: `https://share.acgnx.se/down.php?date=${pubDate}&hash=${hash}`
            }
            //console.log(item);
            this.list.push(item);
        }
    }
    toString(): string {
        return JSON.stringify(this.list);
    }
}
export { acgnxParser };
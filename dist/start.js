"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const server_1 = require("./server");
const db_1 = require("./db");
const dbg = debug('dukaan:server');
db_1.db.sync({
    force: true
    // logging: debug('dukaan:db')
}).then(() => {
    dbg('Database synchronised, starting server');
    server_1.app.listen(server_1.config.PORT, () => {
        dbg(`Started on http://localhost:${server_1.config.PORT}`);
    });
});
//# sourceMappingURL=start.js.map
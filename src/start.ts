import * as debug from 'debug'
import {app, config} from './server'
import {db} from './db'

const dbg = debug('dukaan:server')

db.sync({
    force: true
    // logging: debug('dukaan:db')
}).then(() => {
    dbg('Database synchronised, starting server')
    app.listen(config.PORT, () => {
        dbg(`Started on http://localhost:${config.PORT}`)
    })
})

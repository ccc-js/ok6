import * as ok6 from '../mod.js'

console.log('ok6=', ok6)
let server = new ok6.Server()
server.public('/public')
server.route()
server.listen(8000)

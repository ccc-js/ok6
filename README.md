# ok6

A Server Framework based on Oak

## Example

```js
import * as ok6 from '../mod.js'

let server = new ok6.Server()
server.public('/public')
server.route()
server.listen(8000)

```

import { Hono } from 'hono'
//import { serveStatic } from 'hono/deno'
import { serveStatic } from '@hono/node-server/serve-static'
import { fromFileUrl } from "jsr:@std/path/from-file-url";

const app = new Hono()

const routes = app.get('/api/clock', (c) => {
  return c.json({
    time: new Date().toLocaleTimeString()
  })
})

export type AppType = typeof routes

app.use('/static/*', serveStatic({ root:  './dist/' }))
// <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />
app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        
        {import.meta.env ? (
          <script type="module" src="/src/client.tsx"></script>
        ) : (
          <script type="module" src="/static/client.js"></script>
        )}
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  )
})

export default app

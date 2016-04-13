import express from 'express'
import http from 'http'
const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('hola'))

server.listen(port, () => console.log(`Server listening on port ${port}`))
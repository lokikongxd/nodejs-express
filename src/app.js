import express from 'express'
import config from 'config'

const app = express()
const port = config.get('app.port')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server Startd on Port ${port}`)
})

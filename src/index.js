import express from 'express'
import bodyParser from 'body-parser'
import userController from './controllers/user'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/user', userController)

app.listen(port, () => {
  console.log(`Executando: http://localhost:${port}`)
})
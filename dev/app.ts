import express, { Application, Request, Response } from 'express'
import { connect } from 'mongoose'
import { MONGO, PORT } from './config'
import { PostRouter } from './router-server/RouterPost';

connect(MONGO, (err) => {
    if (err) throw err
    console.log('Подключились к БД')
})

const app: Application = express()

app.use(express.urlencoded({ extended: false }))
app.use('/api/post', PostRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})

app.listen(PORT, () => console.log('Сервер запущен'))

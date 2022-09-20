import express, { Application, Request, Response } from 'express'
import { connect } from 'mongoose'
import { MONGO, PORT } from './config'

connect(MONGO, (err) => {
    if (err) throw err
    console.log('Подключились к БД')
})

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})

app.listen(PORT, () => console.log('Сервер запущен'))

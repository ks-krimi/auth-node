import express from 'express'
import mongoose from 'mongoose'
import { createClient } from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { REDIS_OPTIONS, SESSION_OPTIONS, APP_PORT, MONGO_URI } from '../config'

const RedisStore = connectRedis(session)
const redisClient = createClient({ legacyMode: true })
const app = express()

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('succesfully connected to db'))
  .catch((e) => console.log(`Message d'erreur: ${e.message}`))

app.use(express.json())

app.use(
  session({
    ...SESSION_OPTIONS,
    store: new RedisStore({
      ...REDIS_OPTIONS,
      client: redisClient
    })
  })
)

app.route('/').get((req, res) => {
  res.status(200).json({ message: 'works' })
})

app.listen(APP_PORT, () =>
  console.log(`Server is ready at http://localhost:${APP_PORT}`)
)

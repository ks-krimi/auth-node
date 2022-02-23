import mongoose from 'mongoose'
import { createClient } from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { createApp } from './app'
import { REDIS_OPTIONS, APP_PORT, MONGO_URI } from '../config'

const RedisStore = connectRedis(session)
const redisClient = createClient({
  legacyMode: true,
  password: REDIS_OPTIONS.pass
})

redisClient
  .connect()
  .then(() => console.log('Redis client connected'))
  .catch((e) => console.log(`Redis error: ${e.message}`))

const store = new RedisStore({ ...REDIS_OPTIONS, client: redisClient })
const app = createApp(store)

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Succesfully connected to db'))
  .catch((e) => console.log(`Message d'erreur: ${e.message}`))

app.listen(APP_PORT, () =>
  console.log(`Server is ready at http://localhost:${APP_PORT}`)
)

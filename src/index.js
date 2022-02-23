import mongoose from 'mongoose'
import { createClient } from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { createApp } from './app'
import { REDIS_OPTIONS, APP_PORT, MONGO_URI } from '../config'

const RedisStore = connectRedis(session)
const redisClient = createClient({ legacyMode: true })
const store = new RedisStore({ ...REDIS_OPTIONS, client: redisClient })
const app = createApp(store)

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('succesfully connected to db'))
  .catch((e) => console.log(`Message d'erreur: ${e.message}`))

app.listen(APP_PORT, () =>
  console.log(`Server is ready at http://localhost:${APP_PORT}`)
)

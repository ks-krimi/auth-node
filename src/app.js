import express from 'express'
import session from 'express-session'
import { SESSION_OPTIONS } from '../config'
import { register } from './routes'

export const createApp = (store) => {
  const app = express()

  app.use(express.json())
  app.use(session({ ...SESSION_OPTIONS, store }))
  app.use(register)

  return app
}

import express from 'express'
import session from 'express-session'
import { SESSION_OPTIONS } from '../config'
import { notFound, serverError } from './middlewares'
import { register } from './routes'

export const createApp = (store) => {
  const app = express()
  app.disable('x-powered-by')

  app.use(express.json())
  app.use(session({ ...SESSION_OPTIONS, store }))
  app.use(register)

  app.use(notFound)
  app.use(serverError)

  return app
}

import express from 'express'
import session from 'express-session'
import { SESSION_OPTIONS } from '../config'
import { active, notFound, serverError } from './middlewares'
import { home, login, logout, register } from './routes'

export const createApp = (store) => {
  const app = express()
  app.disable('x-powered-by')

  app.use(express.json())
  app.use(session({ ...SESSION_OPTIONS, store }))

  // set absolute session time out
  app.use(active)

  app.use(register)
  app.use(login)
  app.use(logout)
  app.use(home)

  app.use(notFound)
  app.use(serverError)

  return app
}

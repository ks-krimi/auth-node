import express from 'express'
import session from 'express-session'
import { SESSION_OPTIONS } from '../config'

export const createApp = (store) => {
  const app = express()

  app.use(express.json())
  app.use(session({ ...SESSION_OPTIONS, store }))

  app.route('/').get((req, res) => {
    res.status(200).json({ message: 'it works' })
  })

  return app
}

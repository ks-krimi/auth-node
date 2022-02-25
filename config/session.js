import { IS_IN_PROD } from './app'

const {
  SESSION_SECRET = 'secret',
  SESSION_NAME = 'sid',
  SESSION_IDLE_TIMEOUT = 30000,
  IN_PROD = IS_IN_PROD
} = process.env

export const SESSION_OPTIONS = {
  cookie: {
    httpOnly: true,
    secure: IN_PROD,
    maxAge: SESSION_IDLE_TIMEOUT,
    sameSite: true
  },
  rolling: true,
  secret: SESSION_SECRET,
  name: SESSION_NAME,
  resave: false,
  saveUninitialized: false
}

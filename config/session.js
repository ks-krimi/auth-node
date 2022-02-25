import { IS_IN_PROD } from './app'

const ONE_HOUR = 1000 * 60 * 60
const THIRTY_MINUTES = ONE_HOUR / 2
const SIX_HOURS = ONE_HOUR * 6

const {
  SESSION_SECRET = 'secret',
  SESSION_NAME = 'sid',
  SESSION_IDLE_TIMEOUT = THIRTY_MINUTES,
  IN_PROD = IS_IN_PROD
} = process.env

export const SESSION_ABSOLUTE_TIMEOUT = +(
  process.env.SESSION_ABSOLUTE_TIMEOUT || SIX_HOURS
)

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

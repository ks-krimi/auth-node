import { SESSION_ABSOLUTE_TIMEOUT } from '../../config'
import { isLoggedIn, logOut } from '../auth'
import { BadRequest, Unauthorized } from '../utils'

export const guest = (req, res, next) => {
  if (isLoggedIn(req)) {
    return next(new BadRequest('You are already logged in'))
  }
  next()
}

export const auth = (req, res, next) => {
  if (!isLoggedIn(req)) {
    return next(new Unauthorized('You must be logged in'))
  }
  next()
}

export const active = async (req, res, next) => {
  try {
    if (isLoggedIn(req)) {
      const now = Date.now()
      const { createdAt } = req.session
      if (now > createdAt + SESSION_ABSOLUTE_TIMEOUT) {
        await logOut(req, res)
        return next(new Unauthorized('Session expired'))
      }
    }
    next()
  } catch (err) {
    next(err)
  }
}

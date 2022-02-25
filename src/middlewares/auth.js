import { isLoggedIn } from '../auth'
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

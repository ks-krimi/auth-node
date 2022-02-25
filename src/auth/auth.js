import { SESSION_OPTIONS } from '../../config'

export const logIn = (req, userId) => {
  req.session.userId = userId
}

export const isLoggedIn = (req) => !!req.session.userId // return false if undefined

export const logOut = (req, res) => {
  return new Promise((resolve, reject) => {
    req.session.destroy((err) => {
      if (err) reject(err)
      res.clearCookie(SESSION_OPTIONS.name)
      resolve()
    })
  })
}

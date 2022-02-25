export const logIn = (req, userId) => {
  req.session.userId = userId
}

export const isLoggedIn = (req) => !!req.session.userId // return false if undefined

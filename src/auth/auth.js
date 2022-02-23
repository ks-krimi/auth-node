export const LogIn = (req, userId) => {
  req.session.userId = userId
}

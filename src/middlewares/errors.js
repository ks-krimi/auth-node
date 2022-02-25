import { IS_IN_PROD } from '../../config'

export const serverError = (err, req, res, next) => {
  const message = err.status ? err.message : 'Intenal Server Error'
  if (!err.status && !IS_IN_PROD) {
    console.error(err.stack)
  }
  res.status(err.status || 500).json({ message })
}

export const notFound = (req, res, next) => {
  res.status(404).json({ message: 'Not Found' })
}

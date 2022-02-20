const {
  MONGO_HOST = 'localhost',
  MONGO_PORT = 27018,
  MONGO_DATABASE = 'auth'
} = process.env

export const MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`

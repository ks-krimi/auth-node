export const { NODE_ENV = 'development', APP_PORT = 3000 } = process.env
export const IS_IN_PROD = NODE_ENV === 'production'

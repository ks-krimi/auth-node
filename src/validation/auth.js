import Joi from 'joi'

const email = Joi.string().email().min(8).max(254).trim().required()
const name = Joi.string().min(3).max(128).trim().required()
const password = Joi.string().min(8).max(128).required()
const passwordConfirm = Joi.valid(Joi.ref('password')).required()

export const registerSchema = Joi.object({
  email,
  name,
  password,
  passwordConfirm
})

export const loginSchema = Joi.object({ email, password })

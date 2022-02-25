import { BadRequest } from '../utils'

export const validate = async (joiObjectSchema, payload) => {
  try {
    await joiObjectSchema.validateAsync(payload, { abortEarly: false })
  } catch (err) {
    throw new BadRequest(err)
  }
}

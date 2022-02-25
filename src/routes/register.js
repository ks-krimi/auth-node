import { Router } from 'express'
import { User } from '../models'
import { registerSchema, validate } from '../validation'
import { guest } from '../middlewares'
import { logIn } from '../auth'
import { BadRequest } from '../utils'

const router = Router()

router.post('/register', guest, async (req, res, next) => {
  try {
    await validate(registerSchema, req.body)

    const { name, email, password } = req.body

    const found = await User.exists({ email })
    if (found) {
      throw new BadRequest('Invalid email')
    }

    const user = await User.create({ name, email, password })

    logIn(req, user.id)

    res.status(201).json({ status: 'success', data: user })
  } catch (err) {
    next(err)
  }
})

export default router

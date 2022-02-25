import { Router } from 'express'
import { logIn } from '../auth'
import { guest } from '../middlewares'
import { User } from '../models'
import { Unauthorized } from '../utils'
import { loginSchema, validate } from '../validation'

const router = Router()

router.route('/login').post(guest, async (req, res, next) => {
  try {
    await validate(loginSchema, req.body)
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user) {
      const check = await user.check(password)
      if (check) {
        logIn(req, user.id)
        res.json(user)
      } else {
        throw new Unauthorized('Incorrect email or password')
      }
    }
  } catch (err) {
    next(err)
  }
})

export default router

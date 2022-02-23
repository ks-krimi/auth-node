import { Router } from 'express'
import { User } from '../models'
import { registerSchema } from '../validation'
import { LogIn } from '../auth'

const router = Router()

router.post('/register', async (req, res) => {
  await registerSchema.validateAsync(req.body, { abortEarly: false })

  const { name, email, password } = req.body

  const found = await User.exists({ email })
  if (found) {
    throw new Error('Invalid email')
  }

  const user = await User.create({ name, email, password })

  LogIn(req, user.id)

  res.status(201).json({ status: 'success', data: user })
})

export default router

import { Router } from 'express'
import { auth } from '../middlewares'
import { User } from '../models'

const router = Router()

router.route('/home').get(auth, async (req, res) => {
  const user = await User.findById(req.session.userId)
  res.status(200).json({ user })
})

export default router

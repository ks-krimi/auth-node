import { Router } from 'express'
import { auth } from '../middlewares'
import { logOut } from '../auth'

const router = Router()

router.route('/logout').post(auth, async (req, res, next) => {
  try {
    await logOut(req, res)
    res.status(200).json({ message: 'ok' })
  } catch (err) {
    next(err)
  }
})

export default router

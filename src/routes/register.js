import { Router } from 'express'

const router = Router()

router.post('/register', (req, res) => {
  console.log(req.body.email)
  res.status(200).json({ message: 'it works' })
})

export default router

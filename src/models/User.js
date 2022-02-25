import { model, Schema } from 'mongoose'
import { compare, genSalt, hash } from 'bcryptjs'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    const salt = await genSalt()
    this.password = await hash(this.password, salt)
  }
})

userSchema.method('check', async function (password) {
  return await compare(password, this.password)
})

export const User = model('user', userSchema, 'users')

export class BadRequest extends Error {
  constructor (message = 'Bad request') {
    super(message)
    this.status = 400
  }
}

export class Unauthorized extends Error {
  constructor (message = 'Unauthorized') {
    super(message)
    this.status = 401
  }
}

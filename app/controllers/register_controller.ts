import User from '#models/user'
import { registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)

    const user = await User.create(payload)

    console.log(user)

    return response.redirect().toRoute('/login')
  }
}

import { HttpContext } from '@adonisjs/core/http'
import router from '@adonisjs/core/services/router'

const RegisterController = () => import('#controllers/register_controller')
const LoginController = () => import('#controllers/login_controller')
const LogoutController = () => import('#controllers/logout_controller')

router.get('/', async (ctx: HttpContext) => {
  await ctx.auth.check()

  return ctx.view.render('pages/home')
})
router.get('/login', [LoginController, 'show'])
router.get('/register', [RegisterController, 'show'])
router.post('/login', [LoginController, 'store'])
router.post('/register', [RegisterController, 'store'])
router.post('/logout', [LogoutController, 'handle'])

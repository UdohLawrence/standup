import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    first_name: vine.string().trim().minLength(3),
    last_name: vine.string().trim().minLength(3),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const result = await db.from('users').select('id').where('email', value)

        return result.length ? false : true
      }),
    password: vine.string().alphaNumeric().minLength(8),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password: vine.string(),
  })
)

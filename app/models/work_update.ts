import * as luxon from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class WorkUpdate extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column()
  declare portfolio: string | null

  @column()
  declare day: luxon.DateInput

  @column.dateTime({ autoCreate: true })
  declare createdAt: luxon.DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: luxon.DateTime
}

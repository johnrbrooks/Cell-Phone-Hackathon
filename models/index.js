import { model } from 'mongoose'
import makeSchema from './make'
import phoneSchema from './phone'
import platformSchema from './platform'

const Make = model('Make', makeSchema)
const Phone = model('Phone', phoneSchema)
const Platform = model('Platform', platformSchema)

export default {
  Make,
  Phone,
  Platform
}
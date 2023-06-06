const { Schema } = require('mongoose')

const makeSchema = new Schema(
  { 
    name: { type: String, required: true },
    platform_id: { type: Schema.Types.ObjectId, ref: 'platform_id' },
  },
  { timestamps: true }
)

module.exports = makeSchema
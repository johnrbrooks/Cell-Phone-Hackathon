const { Schema } = require('mongoose')

const Make = new Schema(
  {
    make_id: { type: String, required: true },
    name: { type: String, required: true },
    platform_id: { type: Schema.Types.ObjectId, ref: 'platform_id' },
  },
  { timestamps: true }
)

module.exports = Make
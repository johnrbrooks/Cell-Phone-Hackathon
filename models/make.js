const { Schema } = require('mongoose')

const makeSchema = new Schema(
  { 
    name: { type: String, required: true },
    platform_id: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = makeSchema
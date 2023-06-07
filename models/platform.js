const { Schema } = require('mongoose')

const platformSchema = new Schema(
    {
        platform_name: { type: String, required: true },
    }
)

module.exports = platformSchema

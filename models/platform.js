const { Schema } = require('mongoose')

const platformSchema = new Schema(
    {
        platform_name: { type: String, required: true },
        platform_id: {  type: Schema.Types.ObjectId, ref: 'platform_id'  }

    }
)

module.exports = platformSchema

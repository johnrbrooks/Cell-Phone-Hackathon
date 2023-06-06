const { Schema } = require('mongoose')

const phoneSchema = new Schema(
    {
        model_id: { type: String, required: true },
        name: { type: String, required: true },
        generation: { type: String, required: true },
        release_yr: { type: String, required: true },
        price: { type: Number, required: true },
        storage: { type: String, required: true },
        screen_size: { type: String, required: true },
        cx_rating: { type: String, required: true },
        connector_type: { type: String, required: true },
        camera_qual: { type: String, required: true },
        ext_storage: { type: Boolean, required: true },
        connector_type: { type: String, required: true },
        platform_id: { type: Schema.Types.ObjectId, ref: 'platform_id' },
        make_id: { type: Schema.Types.ObjectId, ref: 'make_id' }
    }
)

module.exports = phoneSchema
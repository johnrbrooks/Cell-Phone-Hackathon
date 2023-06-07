const { Schema } = require('mongoose')

const phoneSchema = new Schema(
    {
        image: {type: String, required: true },
        name: { type: String, required: true },
        generation: { type: String, required: true },
        release_yr: { type: String, required: true },
        price: { type: Number, required: true },
        storage: [{ type: String, required: true }],
        screen_size: { type: String, required: true },
        cx_rating: { type: String, required: true },
        connector_type: { type: String, required: true },
        camera_qual: { type: String, required: true },
        ext_storage: { type: Boolean, required: true },
        connector_type: { type: String, required: true },
        platform_id: { type: String, required: true },
        make_id: { type: String, required: true }
    }
)

module.exports = phoneSchema
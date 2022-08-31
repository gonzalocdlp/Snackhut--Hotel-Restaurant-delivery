import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:60,
    },
    description: {
        type: String,
        required: true,
        maxlength:200,
    },
    img: {
        type: String,
        required: true,
        maxlength:60,
    },
    price: {
        type: [Number],
        required: true,
        maxlength:8,
    },
    extras: {
        type: [
            {text:{type:String, required: true, maxlength:60},
            price:{type:Number,maxlength:8, required: true}}
        ],
        maxlength:60,
    },

},
{timestamps: true}
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
    },
    product_name: {
      type: String,
      required: true,
    },
    product_price: {
      type: Number,
      required: true,
    },
    product_image: {
      type: String,
      required: true,
    },
    product_quantity: {
      type: Number,
      default: 1,
    },
    product_in_stock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("products", productSchema);

export { ProductModel };

import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    cartItems: [
      {
        product_name: String,
        product_price: Number,
        product_id: String,
        product_image: String,
        product_quantity: Number,
      },
    ],
    userCartSummary: {
      totalAmount: Number,
      totalCartItems: Number,
    },
  },
  { timestamps: true }
);

const CartModel = mongoose.model("cartItems", cartSchema);

export { CartModel };

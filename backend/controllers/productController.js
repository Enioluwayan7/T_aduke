import mongoose from "mongoose";
import { ProductModel } from "../models/productModel/productModel.js";
import { nanoid } from "nanoid";
import validator from "validator";

// GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();

    res.status(200).json({ products, status: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "failed" });
  }
};

// GET A PRODUCT
export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    let product;

    // Check if the provided id is a valid mongoDB ID
    if (mongoose.Types.ObjectId.isValid(id)) {
      // search by ID
      product = await ProductModel.findOne({ _id: id });
    } else {
      // search by name
      product = await ProductModel.find({
        product_name: { $regex: id, $options: "i" },
      });

      if (!product) {
        return res
          .status(400)
          .json({ message: "Product Not Found", status: "failed" });
      }

      res.status(200).json({ data: product, message: "Product Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// CREATE A PRODUCT
export const createProduct = async (req, res) => {
  const { product_name, product_price, product_image } = req.body;

  if (validator.isEmpty(product_name, { ignore_whitespace: true })) {
    return res
      .status(400)
      .json({ message: "Please provide a product name", status: "failed" });
  }

  if (product_price < 1) {
    return res.status(400).json({
      message: "Please provide a product price",
      status: "failed",
    });
  }

  if (!validator.isURL(product_image)) {
    return res
      .status(400)
      .json({ message: "Please provide a product image", status: "failed" });
  }

  //    Add new product here
  try {
    // Check if product already exists (case insensitive)
    const existingProduct = await ProductModel.findOne({
      product_name: { $regex: new RegExp("^" + product_name + "$", "i") },
    });

    if (existingProduct) {
      return res.status(400).json({
        status: "error",
        message: `The product: ${product_name}, already exists in the store`,
      });
    }

    const product = new ProductModel({
      product_id: nanoid(10),
      product_name,
      product_price,
      product_image,
    });
    await product.save();

    res
      .status(201)
      .json({ message: "Product created successfully", status: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "failed" });
  }
};

// UPDATE A PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if ID is provided
    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    // Find and update the product
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      {
        product_name: req.body.product_name?.trim(),
        product_price: req.body.product_price,
        product_quantity: req.body.product_quantity,
        product_image: req.body.product_image?.trim(),
        product_in_stock: req.body.product_in_stock,
      },
      { new: true, runValidators: true }
    );

    // If product not found
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Send the updated product
    res
      .status(200)
      .json({ message: "Product updated successfully", updatedProduct });
    console.log(updatedProduct);
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// DELETE A PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const product = await ProductModel.findOneAndDelete({
      _id: req.params.id,
    });

    if (product) {
      res.json({
        message: "product deleted successfully",
        status: "success",
      });
      console.log("Product deleted");
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

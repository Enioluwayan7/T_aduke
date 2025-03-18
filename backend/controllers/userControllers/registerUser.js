import { UserModel } from "../../models/userModel/userModel.js";
import bcrypt from "bcrypt";

async function registerUser(req, res) {
  const { email, name, password, confirmPassword } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required!",
      status: "failed",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format!",
      status: "failed",
    });
  }

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ message: "Passwords don't match!", status: "failed" });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters long!",
      status: "failed",
    });
  }

  if (!name) {
    return res.status(400).json({
      message: "Name is required!",
      status: "failed",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //register user here

  try {
    const user = new UserModel({
      name: name,
      email: email,
      password: hashPassword,
    });
    await user.save();

    res
      .status(201)
      .json({ message: "Account created successfully", status: "successful" });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "failed" });
  }
}

export { registerUser };

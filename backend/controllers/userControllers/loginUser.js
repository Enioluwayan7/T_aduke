import { UserModel } from "../../models/userModel/userModel.js";
import bcrypt from "bcrypt";

async function loginUser(req, res) {
  const { email, password } = req.body;

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

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //login user here

  try {
    const user = await UserModel.findOne({ email: email.toLowerCase().trim() });
    if (user === null) {
      return res
        .status(400)
        .json({ message: "Email or password incorrect", status: "failed" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect === false) {
      return res
        .status(400)
        .json({ message: "Email or password incorrect", status: "failed" });
    }
    res.status(200).json({ user, status: "successful" });
  } catch (error) {
    res.status(400).json({ message: "Login failed", status: "failed" });
  }
}

export { loginUser };

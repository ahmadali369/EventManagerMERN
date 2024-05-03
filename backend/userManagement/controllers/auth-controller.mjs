import adminModel from "../models/admin-model.mjs";
import userSchema from "../models/user-model.mjs";
import bcrypt from "bcrypt";

const adminReg = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExist = await adminModel.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }
    const hashPassword = await bcrypt.hashSync(password, 10);

    const userCreated = await adminModel.create({
      username,
      email,
      password: hashPassword,
    });
    res.status(200).json({
      msg: "Admin Added Successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Registeration Unsuccessful" });
  }
};

const userReg = async (req, res) => {
  try {
    const { email, password} = req.body;
    const userExist = await userSchema.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }
    const hashPassword = await bcrypt.hashSync(password, 10);

    const userCreated = await userSchema.create({
      email,
      password: hashPassword,
    });
    res.status(200).json({
      msg: "User Added Successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Registeration Unsuccessful" });
  }
};

const loginAuth = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (role == "Admin") {
      const userExist = await adminModel.findOne({ email: email });
      if (!userExist) {
        return res.status(400).json({ msg: "User Not Found!" });
      }
      const validPass = await bcrypt.compare(password, userExist.password);
      if (validPass) {
        res.status(200).json({
          msg: "Admin Logged In Successfully!",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        res.status(400).json({ msg: "Invalid email or password!" });
      }
    } else {
      const userExist = await userSchema.findOne({ email: email });
      if (!userExist) {
        return res.status(400).json({ msg: "User Not Found!" });
      }
      const validPass = await bcrypt.compare(password, userExist.password);
      if (validPass) {
        res.status(200).json({
          msg: "User Logged In Successfully!",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        res.status(400).json({ msg: "Invalid email or password!" });
      }
    }
  } catch (error) {}
};

const getUser = async (req, res) => {
  const usrData = await userSchema.find({});
  res.status(200).json(usrData);
};

export default { adminReg, userReg, loginAuth, getUser };

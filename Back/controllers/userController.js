// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// import userService from "../service/userService.js";

// export const login = async (req, res) => {
//   try {
//     const {email, password} = req.body;
//     const user = await User.findOne({where: {email}});
//     if (!user) return res.status(400).json({error: "Usuario no encontrado"});

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({error: "Contraseña incorrecta"});

//     const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     res.json({token, user});
//   } catch (error) {
//     res.status(500).json({error: error.message});
//   }
// };

// export const create = async (req, res) => {
//   try {
//     console.log("entra a controller");

//     const {name, email, password} = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = {
//       name,
//       email,
//       password: hashedPassword,
//     };
//     await userService.create(user);
//     res.status(201).json({message: "Usuario registrado"});
//   } catch (error) {
//     res.status(500).json({error: error.message});
//   }
// };

import {registerUser, loginUser} from "../service/userService.js";

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

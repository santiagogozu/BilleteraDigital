// class UserService {
//   async create(employee) {
//     console.log("entra a service", employee);

//     return (await UserModel.create(employee)).toJSON();
//   }
// }

// export default new UserService();

import UserModel from "../models/UserModel.js";

import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const registerUser = async ({name, email, password}) => {
  console.log("name!!! ", name, "email!!! ", email, "password!! ", password);

  const userExists = await UserModel.findOne({where: {email}});
  if (userExists) throw new Error("El usuario ya existe");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await UserModel.create({name, email, password: hashedPassword});

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user.id),
  };
};

export const loginUser = async ({email, password}) => {
  const user = await UserModel.findOne({where: {email}});
  console.log("userService!!!!!!!!!!!!! ", user);

  if (!user) throw new Error("Usuario no encontrado");

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw new Error("Contraseña incorrecta");

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user.id),
  };
};

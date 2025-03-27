const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});
    if (!user) return res.status(400).json({error: "Usuario no encontrado"});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({error: "Contraseña incorrecta"});

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({token, user});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

exports.create = async (req, res) => {
  const {username, password, role} = req.body;
  try {
    const {name, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({name, email, password: hashedPassword});
    res.status(201).json({message: "Usuario registrado", user: newUser});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

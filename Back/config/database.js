import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// const db = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//     logging: false, // Desactivar logs de SQL
//   }
// );

// db.authenticate()
//   .then(() => console.log("Conectado a la base de datos"))
//   .catch((err) => console.error("Error al conectar a la base de datos:", err));

// module.exports = db;

const db = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",
});

export default db;

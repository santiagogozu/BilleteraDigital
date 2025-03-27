const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/user");
// const transactionRoutes = require("./routes/transactionRoutes");

const cors = require("cors");

const app = express();

// Conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión establecida correctamente con la base de datos.");
  })
  .catch((err) => {
    console.error("Error al conectar con la base de datos:", err);
  });

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas

app.use("/auth", userRoutes);
// app.use("/transactions", transactionRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} 🔥`);
});

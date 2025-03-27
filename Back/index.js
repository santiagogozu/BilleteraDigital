import express from "express";
import cors from "cors";
import db from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
// const transactionRoutes = require("./routes/transactionRoutes");
const app = express();

// Conexión a la base de datos
db.authenticate()
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

app.use("/users", userRoutes);
// app.use("/transactions", transactionRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} 🔥`);
});

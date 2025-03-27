import {DataTypes} from "sequelize";
import db from "../config/database.js";

const UserModel = db.define(
  "User",
  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    balance: {type: DataTypes.DECIMAL(10, 2), defaultValue: 0.0},
  },
  {timestamps: false}
);

export default UserModel;

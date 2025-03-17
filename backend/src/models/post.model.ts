import db from "../utils/database.js";
import { DataTypes } from "sequelize";
import User from "./user.model.js";
import Comment from "./comment.model.js";




const Post = db.define('post',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING, // URL or file path
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: "id",
        },
      },

});

//relationships

User.hasMany(Post,{foreignKey:"userId", onDelete:"CASCADE"});
Post.belongsTo(User,{foreignKey:"userId"});


export default Post;
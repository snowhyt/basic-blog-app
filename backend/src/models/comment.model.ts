//comment ito

import { DataTypes } from "sequelize";
import db from "../utils/database.js";
import User from "./user.model.js";
import Post from "./post.model.js";


export const Comment = db.define('comment',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: "id",
        },
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Post,
          key: "id",
        },
      },

   

});

User.hasMany(Comment,{foreignKey:"userId", onDelete:"CASCADE"});
Comment.belongsTo(User,{foreignKey:"userId"});
Post.hasMany(Comment,{foreignKey:"postId", onDelete:"CASCADE"});
Comment.belongsTo(Post,{foreignKey:"postId"});



export default Comment;
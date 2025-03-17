import {Sequelize} from "sequelize";


const sequelize = new Sequelize({
    database: process.env.PG_DATABASE,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    dialect: "postgres"




})
   



    export default sequelize;
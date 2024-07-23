const path = require("path");
const envPath = path.join(__dirname, "../../.env");
console.log("Loading .env from:", envPath);
const result = require("dotenv").config({ path: envPath });

if (result.error) {
  console.error("Error loading .env file:", result.error);
} else {
  console.log("Environment variables loaded successfully");
}

console.log("DATABASE_HOST:", process.env.DATABASE_HOST);
console.log("DATABASE_PORT:", process.env.DATABASE_PORT);
console.log("DATABASE_USER:", process.env.DATABASE_USER);
console.log("DATABASE_PASSWORD:", process.env.DATABASE_PASSWORD);
console.log("DATABASE_NAME:", process.env.DATABASE_NAME);

module.exports = {
  development: {
    dialect: "mysql",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
};

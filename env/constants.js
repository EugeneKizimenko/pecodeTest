require('dotenv').config({path: "env/.env" });

module.exports = {
    Base_url: process.env.BASE_URL,
    Login: process.env.LOGIN,
    Password: process.env.PASSWORD,
}
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
app.get("/", (req, res) => {
    res.send(`
        <h1>Hello World!</h1> 
        <h1>Backend is running</h1>
        ${process.env.PORT}
    `);
});

app.get("/signup", (req, res) => {
    res.send(`<h1>Sign-Up Page</h1>`);
});

app.get("/login", (req, res) => {
    res.send(`<h1>Login Page</h1>`);
});

app.get("/admin", (req, res) => {
    res.send(`<h1>Admin Page</h1>`);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

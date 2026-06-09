const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

// Submit form
app.post("/submit", async (req, res) => {
    try {
        const response = await axios.post(
    "http://43.204.19.53:5001/process",
    new URLSearchParams(req.body),
    {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
);
        );

        res.send(response.data);
    } catch (error) {
        console.error(error.message);
        res.send("Error connecting to backend");
    }
});

// Start server
app.listen(3000, () => {
    console.log("Frontend running on port 3000");
});
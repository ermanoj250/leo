const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

const axios = require("axios");

app.post("/submit", async (req, res) => {
  const response = await axios.post(
    "http://43.204.19.53:5001/process",
    req.body
  );
  res.send(response.data);
});
    } catch (error) {
        console.error(error.message);
        res.send("Error connecting to backend");
    }
});

app.listen(3000, () => {
    console.log("Frontend running on port 3000");
});
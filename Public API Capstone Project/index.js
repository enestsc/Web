import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const URL = "";

app.use(express.static("public"));

app.get("/", async (req,res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
        res.render("index.ejs", {content : result.data});
    } catch (error) {
        console.log(error.message);
        res.render(404);
    }
});

app.listen(port, () => {
    console.log(`Server started on ${port}.`)
});
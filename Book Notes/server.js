import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
    user: "postgres",
    password: "pass",
    database: "",
    host: "localhost",
    port: 5432
});

db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Successfulyy started on port ${port}.`);
});
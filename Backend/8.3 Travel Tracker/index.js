import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "pass",
  port: 5432,
});

db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function visitCountry() {
  let visitedCountries = [];
  const result = await db.query("SELECT country_code from visited_countries");
  result.rows.forEach((country) => {
    visitedCountries.push(country.country_code);
  });
  return visitedCountries;
}

app.get("/", async (req, res) => {
  const countries = await visitCountry();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req, res) => {

  const newCountry = req.body["country"];
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';", [newCountry.toLowerCase()]
    );
    const code = result.rows[0].country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [code]
      );
      res.redirect("/");
    } catch (error) {
      const countries = await visitCountry();
      res.render("index.ejs", {
        error: "Country has already been added, try again.",
        countries: countries,
        total: countries.length,
      });
    }
  } catch (error) {
    const countries = await visitCountry();
    res.render("index.ejs", {
      error: "Country name does not exist, try again.",
      countries: countries,
      total: countries.length,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

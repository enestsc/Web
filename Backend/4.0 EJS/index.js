import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  const d = new Date();
  let day = d.getDay();

  //console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard!";

  if (day == 0 || day == 6) {
    type = "the weekend";
    adv = "it's time to have some fun!";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

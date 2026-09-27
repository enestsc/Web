import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let blogs = [];

function convertNewlinesToBreaks(text) {
    if (!text) return text;
    return text.replace(/\r\n|\r|\n/g, '<br>');
}

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"))

app.get("/", (req,res) => {
    res.render("home");
});

app.get("/blogs/:id", (req, res) => {
    const blogId = req.params.id;
    const blog = blogs[blogId];
    if (blog) {
        res.render("blogDetail", { blog: blog, blogId: blogId });
    } else {
        res.status(404).send("Blog not found");
    }
});

app.post("/blogs/edit/:id", (req, res) => {
    const blogId = req.params.id;
    const title = req.body["title"];
    const text = req.body["text"];

    if (!title || !text) {
        res.send('<script>alert("Both title and text are required!"); window.location.href = "/blogs/' + blogId + '";</script>');
    } else {
        blogs[blogId] = { title: title, text: text };
        res.redirect("/blogs/" + blogId);
    }
});

app.get("/blogs", (req,res) => {
    res.render("blogs", { blogs: blogs });
});

app.post("/blogs", (req,res) => {
    const title = req.body["title"];
    const text = req.body["text"];

    if (!title || !text) {
        // Hata mesajı ile yeniden yönlendirme
        res.send('<script>alert("Both title and text are required!"); window.location.href = "/blogs";</script>');
    } else {
        // Verileri sakla
        blogs.push({ title: title, text: text });
        // Başarılı gönderim sonrası yönlendirme
        res.redirect("/blogs");
    }
    
});

app.listen(port, () =>{
    console.log(`Server started on port ${port}.`)
});
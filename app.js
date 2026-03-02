import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname)));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/:page", (req, res) => {
    const page = req.params.page;
    res.render(page);
});


// app.get("/about", (req, res) => {
//     res.render("about");
// });

// app.get("/contact", (req, res) => {
//     res.render("contact");
// });

// app.get("/menu", (req, res) => {
//     res.render("menu");
// });

// app.get("/reservation", (req, res) => {
//     res.render("reservation");
// });

// app.get("/service", (req, res) => {
//     res.render("service");
// });

// app.get("/testimonial", (req, res) => {
//     res.render("testimonial");
// });

app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`)});
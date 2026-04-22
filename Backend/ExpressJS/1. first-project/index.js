const express = require('express');
const app = express()


// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

// app.get("/about", (req, res) => {
//     res.send("This is the about page")
// })

// app.get("/about/:id", (req, res) => {
//     console.log(req.params);
//     res.send(`This is the about page with id ${req.params.id}`)
// })

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("This is search page")
// })

// app.post("/blog", (req, res) => {
//     res.send("This is the blog page")
// })

// app.get("/blog", (req, res) => {
//     res.send("This is the blog page")
// })

// app.put("/blog", (req, res) => {
//     res.send("This is the blog page")
// })

// app.delete("/blog", (req, res) => {
//     res.send("This is the blog page")
// })


app.route('/blog')
    .get((req, res) => {
        res.send("This is the blog page")
    })
    .post((req, res) => {
        res.send("This is the blog create page")
    })
    .put((req, res) => {
        res.send("This is the blog update page")
    })
    .delete((req, res) => {
        res.send("This is the blog delete page")
    })

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
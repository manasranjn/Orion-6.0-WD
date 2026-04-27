const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("This is Home Page")
})
router.post("/", (req, res) => {
    res.send("This is Home Page-Create")
})
router.put("/", (req, res) => {
    res.send("This is Home Page-Update")
})
router.delete("/", (req, res) => {
    res.send("This is Home Page-Delete")
})

module.exports = router
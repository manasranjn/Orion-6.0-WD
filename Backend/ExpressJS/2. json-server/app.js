const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        message: 'Hello, World!',
        name: 'John Doe',
        age: 30,
        city: 'New York'
    });
    // console.log(req.method);

});
app.post('/', (req, res) => {
    console.log(req.body);
    const data = req.body;
    res.send({ message: 'POST request received!', data: data });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
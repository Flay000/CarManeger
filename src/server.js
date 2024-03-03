const express = require('express');
const cors = require('cors');
const carRoutes = require('./todos.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(carRoutes);

app.get("/health", (req, res) => {
    return res.json("up")
});
app.listen(3333, () => console.log('server up in 3333'))
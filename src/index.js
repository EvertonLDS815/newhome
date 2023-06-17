const routes = require("./routes/router");
const express = require("express");
const app = express();

const port = process.env.PORT || 2023;

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`🚀 http://localhost:${port}`))
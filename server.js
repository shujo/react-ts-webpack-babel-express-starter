const express = require('express');
const PORT = process.env.PORT || 8080;
const path = require("path");

const app = express();

app.use(express.static(__dirname));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'index.html')));

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
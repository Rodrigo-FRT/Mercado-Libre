const express = require ("express");
const app = express();
const path = require ("path");

app.listen (3040, () => {
    console.log ("Servidor corriendo en el puerto 3040")
});

app.get ("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.use(express.static("public"));
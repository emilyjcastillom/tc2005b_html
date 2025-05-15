import express from "express";


const app = express();


app.use("/", express.static("public"));

const port = 2500;

app.listen(port, console.log("http://localhost:"+port));


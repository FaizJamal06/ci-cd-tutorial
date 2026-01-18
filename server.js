import express from "express";
import sum from "./sum.js";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/sum/:a/:b", (req, res) => {
    const result = sum(Number(req.params.a), Number(req.params.b));
    res.send(result.toString());
    console.log(req.params.a, req.params.b);
    console.log(result); // Log the calculated result
})

app.listen(3000, () => {

    console.log("Server is running on port 3000");
}); 

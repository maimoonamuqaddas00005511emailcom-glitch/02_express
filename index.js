// Importing Express library
import express from "express";

// Creating the application
const app = express();

// Port number
const PORT = 3000;

// Defining the route for the root URL
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json()); // Use bodyParser.json() for JSON body parsing

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/formDb")
.then(() => {
    console.log("MongoDB connection successful");
})
.catch((err) => {
    console.log("MongoDB connection failed", err);
});

// User schema and model
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
    res.send("App is working");
});

app.post("/signup", async (req, res) => {
    const { email, username, password,confirmpassword } = req.body;

   
    try {
        const user = await User.create({ email, username, password,confirmpassword });
        res.status(200).json({ message: "Data added successfully", user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

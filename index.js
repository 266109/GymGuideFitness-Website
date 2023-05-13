import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";

const app = express();

app.use(express.json());
//app.use(express.urlencoded);
app.use(cors());


const DB = "mongodb+srv://namans:Naman16@cluster1.rzgo5jl.mongodb.net/myappdb";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection established!");
  })
  .catch((error) => {
    console.log("Error connecting to database:", error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user });
      } else {
        res.send({ message: "Password did not match" });
      }
    } else {
      res.send({ message: "User Not Registered" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user
        .save()
        .then((savedDocument) => {
          res.send({ message: "Successfully registered !! Kindly LogIn now" });
        })
        .catch((error) => {
          console.error("Error saving document:", error);
        });
    }
  });
});

const port = 8080;
app.listen(port, () => {
  console.log("Server Started at port ", port);
});

const express = require("express");
const userRountes = require("./routes/users");
const authRountes = require("./routes/auth");
const commentRountes = require("./routes/comments");
const likeRountes = require("./routes/likes");
const postRountes = require("./routes/posts");
const pool = require("./db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = 8800;
const corsOptions = {
  origin: "http://localhost:5173",
  credential: true,
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json("Hello world");
});

app.use("/api/users", userRountes);
app.use("/api/auth", authRountes);
app.use("/api/comments", commentRountes);
app.use("/api/likes", likeRountes);
app.use("/api/posts", postRountes);

app.listen(PORT, () => {
  console.log("Connected to api successfully!!");
});

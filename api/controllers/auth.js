const pool = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  // check user if exist
  const q = "SELECT * FROM users WHERE email = $1";
  pool.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.rows.length) return res.json("User already exists!!");
    //   if user dose't exist, create user
    //   hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users (username, email, password, name) VALUES ($1, $2, $3, $4)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    pool.query(q, values, (err, data) => {
      if (err) return res.json(err);
      return res.json("User has been created successfully!!");
    });
  });
};

const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = $1";

  pool.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (!data.rows.length) return res.json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data.rows[0].password
    );

    if (!checkPassword) return res.json("Password is not correct!");

    const token = jwt.sign({ id: data.rows[0].id }, "secretkey");

    const { password, ...others } = data.rows[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out");
};

module.exports = { login, register, logout };

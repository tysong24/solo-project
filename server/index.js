const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");

// middleware
// app.use(cors());
app.use(express.json());

// routes

app.use("/build", express.static(path.resolve(__dirname, "../build")));

// create

app.get("/", async (req, res) => {
  try {
    console.log("got into get");
    res.status(200).sendFile(path.resolve(__dirname, "../index.html"));
  } catch (err) {
    console.error(err);
  }
});

app.post("/spend", async (req, res) => {
  try {
    const { description, amount, type } = req.body;
    const newSpend = await pool.query(
      "INSERT INTO spend (description, amount, type) VALUES ($1, $2, $3) returning *",
      [description, amount, type]
    );

    console.log("in server: ", req.body);
    res.status(200).json(newSpend.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// get all

app.get("/spend", async (req, res) => {
  try {
    const allSpend = await pool.query("SELECT * FROM spend");
    res.status(200).json(allSpend.rows);
  } catch (err) {
    console.error(err);
  }

  // get one

  app.get("/spend/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const spend = await pool.query(
        "SELECT * FROM spend WHERE spend_id = $1",
        [id]
      );
      res.status(200).json(spend.rows[0]);
    } catch (err) {
      console.error(err);
    }
  });
});

// update

app.put("/spend/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description, amount, type } = req.body;
    const newSpend = await pool.query(
      "UPDATE spend SET description = $2, amount = $3, type = $4 WHERE spend_id = $1",
      [id, description, amount, type]
    );
    console.log(newSpend);
    res.status(200).json("Entry has been updated!");
  } catch (err) {
    console.error(err);
  }
});

// delete

app.delete("/spend/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSpend = await pool.query(
      "DELETE FROM spend WHERE spend_id = $1",
      [id]
    );
    res.status(200).json("Entry has been deleted!");
  } catch (err) {
    console.error(err);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000!");
});

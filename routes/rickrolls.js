const express = require("express");
const connection = require("../connection");
const router = express.Router();

router.post("/rickrolls", (req, res) => {
  let rickrolls = req.body;
  query =
    "insert into rickrolls (name, description, rickroll_link) values (?, ?, ?)";
  connection.query(
    query,
    [
      rickrolls.name,
      rickrolls.description,
      rickrolls.rickroll_link,
    ],
    (error) => {
      if (!error) {
        return res.status(200).json({ message: "Success!" });
      } else {
        return res
          .status(500)
          .json({ statusCode: 500, message: "Error: " + error });
      }
    }
  );
});

router.get("/rickrolls", (req, res) => {
  query = "select * from rickrolls";
  connection.query(query, (error, results) => {
    if (!error) {
      return res.status(200).json({ statusCode: 200, results });
    } else {
      return res.status(500).json({ statusCode: 500, error });
    }
  });
});

router.patch("/rickrolls/update/:rickrollId", (req, res, next) => {
  const id = req.params.rickrollId;
  let rickroll = req.body;
  const query =
    "update rickrolls set name=?, description=?, rickroll_url=? where id=?";
  connection.query(
    query,
    [
      rickroll.name,
      rickroll.description,
      rickroll.rickroll_url,
      id,
    ],
    (error, results) => {
      if (!error) {
        if (results.affectedRows == 0) {
          return res
            .status(404)
            .json({ statusCode: 404, message: "Rickroll id was not found." });
        }

        return res.status(200).json({ statusCode: 200, message: "Success!" });
      } else {
        return res.send(500).json({ statusCode: 500, error });
      }
    }
  );
});

router.delete("/rickrolls/delete/:rickrollId", (req, res, next) => {
  const id = req.params.rickrollId;
  const query = "delete from rickrolls where id=?";
  connection.query(query, [id], (error, results) => {
    if (!error) {
      if (results.affectedRows == 0) {
        return res
          .status(404)
          .json({ statusCode: 404, message: "Rickroll id was not found." });
      }

      return res.status(200).json({ statusCode: 200, message: "Success!" });
    } else {
      return res.send(500).json({ statusCode: 5000, error });
    }
  });
});

module.exports = router;

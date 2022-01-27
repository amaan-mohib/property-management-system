const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/add", (req, res) => {
  const body = req.body;
  db.query(
    "INSERT into Registrations (P_id, Date_of_Reg, Candidate_id ) VALUES ?",
    [body.pid, body.dor, body, cid],
    (err, result) => {
      if (err) console.error(err);
      else {
        res.send("Registration inserted");
        console.log(result);
      }
    }
  );
});

router.get("/:id", (req, res) => {
  const r_id = req.params.id;
  db.query(
    "select * from Registrations where R_id = ?",
    [r_id],
    (err, result) => {
      if (err) console.error(err);
      else {
        console.log("sent result");
        res.send(result);
      }
    }
  );
});

router.put("/update", (req, res) => {
  const body = req.body;
  db.query(
    "update Registrations set Date_of_Reg = ?, Date_of_Exp = ?, Approval = ? where R_id = ?",
    [body.dor, body.doe, body.approval, body.rid],
    (err, result) => {
      if (err) console.error(err);
      else {
        console.log(result);
        res.send("Record updated");
      }
    }
  );
});

router.delete("/delete", (req, res) => {
  const body = req.body;
  db.query(
    "delete from Registrations where R_id = ?",
    [body.rid],
    (err, result) => {
      if (err) console.error(err);
      else {
        console.log(result);
        res.send("Record deleted");
      }
    }
  );
});

module.exports = router;

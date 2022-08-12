"use strict";
const Account = require("../models/appModel.js");
const bcrypt = require("bcryptjs");
exports.registerAccount = (req, res) => {
  Account.registerAccount(req.body.email, (checkAccount) => {
    if (checkAccount.length) {
      res.status(409).send({
        msg: "This user is already in use!",
      });
    } else {
        bcrypt.hash()
    }
    }
    console.log(req.body.email);
  });
};

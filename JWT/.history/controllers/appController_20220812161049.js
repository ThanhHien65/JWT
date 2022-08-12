"use strict";
const Account = require("../models/appModel.js");
const bcrypt = require("bcryptjs");
exports.registerAccount = (req, res) => {
  if (req.body.name.length === 0 || req.body.name.includes(" ") === true) {
    res.status(409).send({
      msg: "name can't use white space",
    });
  }else
};

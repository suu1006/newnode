"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//앱 세팅
router.get("/" , ctrl.home);
router.get("/login", ctrl.login);

module.exports = router; //외부로 내보내기 기능
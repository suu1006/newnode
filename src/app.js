// app.js >> 서버의 중심 파일
"use strict";

//모듈
const express = require('express');
const app = express();


// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들웨어 등록 메서드

module.exports = app;



// npm install express --save : --save를 해줘야 package.json에 등록됨.
"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);

module.exports = router;

//-------------------------------------------------------------------------------------------
// "use strict";
// // 자바스크립트 파일에서 
// // 에크마스크립트(ECMAScript) 문법을 준수하겠다는 뜻으로 상단에 적어줌

// const express = require("express");
// const router = express.Router();

// const ctrl = require("./home.ctrl");//.js는 생략 가능한듯

// router.get("/", ctrl.home);
// // router.get("/", (req, res) => {
// //     // app.js에 app.set("views", "./views");세팅을 해 두어서 views에 있는 상태임
// //     res.render("home/index.ejs");
// // });

// router.get("/login", ctrl.login);
// // router.get("/login", (req, res) => {
// //     res.render("home/login"); //뒤에 확장자는 안 입력해줘도 되는 듯?
// // });

// router.post("/login", ctrl.login);

// // 외부에서 라우터를 사용할 수 있도록 던져주기
// module.exports = router;
//--------------------------------------------------------------------------------------------------------
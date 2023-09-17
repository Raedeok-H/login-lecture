// --------------------------------------------------------------------------
// 프런트를 위한 js 만들기, public 폴더 연결

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); //html이랑 비슷한 확장자
app.use(express.static(`${__dirname}/src/public`));
//현재 파일이 있는 위치 안에 /src 안에 ~의 의미임


// use -> 미들웨어를 등록하는 메소드
app.use("/", home);

module.exports = app;
// --------------------------------------------------------------------------




















// --------------------------------------------------------------------------
// pakage.json, pakage-lock.json, node_modules, npm start
// pakage.json 정보로 npm install시 nod_modules를 생성함
// pakage.json에 script설정으로 start라는 스크립트 실행 시, 시작될 파일을 설정할 수 있음
// pakage.json은 버전의 range(범위)만 명시되어 있고, pakage-lock.json은 더 명확한 버전 정보를 담고 있음
// ^과 ~, 단지 버전을 숫자로만 적어놓은 것의 차이
//  => ^은 메이저 버전 제외 다운로드(마이너, 패치)
//  => ~은 패치만 다운로드
//  => 버전을 숫자만 표기한 것은 해당 버전을 의미
// "use strict"; // 에크마스크립트(ECMAScript) 문법을 준수하겠다는 뜻

// // 모듈
// const express = require("express");
// const app = express();

// // 라우팅
// const home = require("./src/routes/home");

// // 앱 세팅
// app.set("views", "./src/views");
// app.set("view engine", "ejs"); //html이랑 비슷한 확장자

// // use -> 미들웨어를 등록하는 메소드
// app.use("/", home);

// module.exports = app;
// --------------------------------------------------------------------------






















// --------------------------------------------------------------------------
// app.listen() 모듈화
// "use strict"; // 에크마스크립트(ECMAScript) 문법을 준수하겠다는 뜻

// // 모듈
// const express = require("express");
// const app = express();

// // 라우팅
// const home = require("./routes/home");

// // 앱 세팅
// app.set("views", "./views");
// app.set("view engine", "ejs"); //html이랑 비슷한 확장자

// // use -> 미들웨어를 등록하는 메소드
// app.use("/", home);

// module.exports = app;
// --------------------------------------------------------------------------


















// --------------------------------------------------------------------------
// MVC의 C(controller) 컨트롤러 분리하기
// "use strict"; // 에크마스크립트(ECMAScript) 문법을 준수하겠다는 뜻

// // 모듈
// const express = require("express");
// const app = express();

// // 포트 설정은 분리하여 작성하는 것이 좋음
// const PORT = 3000;

// // 라우팅
// const home = require("./routes/home");

// // 앱 세팅
// app.set("views", "./views");
// app.set("view engine", "ejs"); //html이랑 비슷한 확장자

// // use -> 미들웨어를 등록하는 메소드
// app.use("/", home);


// app.listen(PORT, function () {
//     console.log("서버 가동");
// });
// --------------------------------------------------------------------------






// --------------------------------------------------------------------------
// 라우팅 분리
// "use strict"; // 에크마스크립트(ECMAScript) 문법을 준수하겠다는 뜻

// // 모듈
// const express = require("express");
// const app = express();

// // 포트 설정은 분리하여 작성하는 것이 좋음
// const PORT = 3000;

// // 라우팅
// const home = require("./routes/home");

// // 앱 세팅
// app.set("views", "./views");
// app.set("view engine", "ejs"); //html이랑 비슷한 확장자

// // use -> 미들웨어를 등록하는 메소드
// app.use("/", home);


// app.listen(PORT, function () {
//     console.log("서버 가동");
// });
// --------------------------------------------------------------------------










// --------------------------------------------------------------------------
// 로그인 뷰(view) 최적화 | MVC의 V(view) 분리하기
// "use strict";

// const express = require("express");
// const app = express();

// // 앱 세팅
// app.set("views", "./views");
// app.set("view engine", "ejs");


// app.get("/", (req, res) => {
//     res.render("home/index");
// });

// app.get("/login", (req, res) => {
//     res.render("home/login");
// });

// app.listen(3000, function () {
//     console.log("서버 가동");
// });
// --------------------------------------------------------------------------












// --------------------------------------------------------------------------
// 로그인 화면 만들기

// "use strict";

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     //기능
//     res.send(`
//     <!DOCTYPE html>
//     <html lang="ko">
//         <head>
//             <meta charset="UTF-8" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>Document</title>
//         </head>
//         <body>
//             여기는 루트입니다.
//         </body>
//     </html>
//     `);
// });

// app.get("/login", (req, res) => {
// res.send(`
// <!DOCTYPE html>
// <html lang="ko">
//     <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Document</title>
//     </head>
//     <body>
//         <input type="text" placeholder="아이디"/><br />
//         <input type="text" placeholder="비밀번호"/><br />
//         <button>로그인</button>
//     </body>
// </html>
// `
//     );
// });

// //이것만 있으면 서버가 띄워짐(express 사용한 것임)
// app.listen(3000, function () {
//     console.log("서버 가동");
// });
// --------------------------------------------------------------------------














// --------------------------------------------------------------------------
// http로 서버 띄워보기

// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/html; charset=utf-8" })

//     // express를 사용하지 않고 라우팅한 예시 => 더러워보임
//     if (req.url === '/') {
//         res.end("여기는 루트입니다.");
//     } else if (req.url === '/login') {
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.")
// });




//-----------------------------------------------------------------------------
// express로 서버 띄워보기

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     //기능
//     res.send("여기는 루트입니다.");
// });

// app.get("/login", (req, res) => {
//     res.send("여기는 로그인 화면입니다.")
// });

// //이것만 있으면 서버가 띄워짐(express 사용한 것임)
// app.listen(3000, function () {
//     console.log("서버 가동");
// });
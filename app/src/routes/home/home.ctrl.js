"use strict";

const User = require("../../models/User");


const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {  
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
    },
};
module.exports = {
    output,
    process,
};














// "use strict";

// const UserStorage = require("../../models/UserStorage");

// const output ={
//     home: (req, res) => {
//         res.render("home/index");
//     },
//     login: (req, res) => {
//         res.render("home/login");
//     }
// };

// const process ={
//     login: (req, res) => {
//         const id = req.body.id,
//             psword = req.body.psword;

//         const users = UserStorage.getUsers("id", "psword");

//         const response = {};
//         if(users.id.includes(id)){
//             const idx = users.id.indexOf(id);
//             if (users.psword[idx] === psword){
//                 response.success = true;
//                 return res.json(response);
//             }
//         }
//         response.success = false;
//         response.msg = "로그인에 실패하셨습니다.";
//         return res.json(response);
//     }
// }
// module.exports = {
//     output,
//     process
// };



















// "use strict";

// const output ={
//     home: (req, res) => {
//         res.render("home/index");
//     },
//     login: (req, res) => {
//         res.render("home/login");
//     }
// };

// const users = {
//     id: ["readeok", "김개발", "김팀장"],
//     psword: ["1234", "1234", "123456"]
// };

// const process ={
//     login: (req, res) => {
//         const id = req.body.id,
//             psword = req.body.psword;

//         if(users.id.includes(id)){
//             const idx = users.id.indexOf(id);
//             if (users.psword[idx] === psword){
//                 return res.json({
//                     success: true
//                 });
//             }
//         }
//         return res.json({
//             success: false,
//             msg: "로그인에 실패하셨습니다."
//         });
//     }
// }
// module.exports = {
//     output,
//     process
// };

















// "use strict";

// const output ={
//     home: (req, res) => {
//         res.render("home/index");
//     },
//     login: (req, res) => {
//         res.render("home/login");
//     }
// };
// const process ={
//     login: (req, res) => {
//         console.log(req.body);
//     }
// }
// module.exports = {
//     output,
//     process
// };















// "use strict";
//  const~ 코드는 에크마 스크립트 문법이고,
//  function~ 코드와 같은 기능임
//  function hello = (req, res){
//  res.render("home/index.ejs");
//  };

// const home = (req, res) => {
//     res.render("home/index");
// };
// const login = (req, res) => {
//     res.render("home/login");
// };'
// module.exports = {
//     home,  // 오브젝트(Object)는 {key:value} 구조인데,
//     login   // 키 하나만 입력하면 {key:key} 처럼 생성됨
// };          // {hello:hello, login:login} 으로 생성한 것과 같음

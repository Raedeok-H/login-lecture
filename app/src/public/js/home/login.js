"use strict"


// DOM: Document Object Model -> js에서 html에 존재하는 데이터들을 가져올 수 있음
const id = document.querySelector("#id"), //#은 id를 의미, #id는 id가 id인것
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    }).then((res) =>res.json())
    .then((res) => {
        if (res.success){
            location.href ="/";
        }else{
            alert(res.msg);
        }
    }).catch((err)=>{
        // console.error(new Error("로그인 중 에러 발생"));
        console.error("로그인 중 에러 발생"); // 두 가지 방식 존재
    });
}

































// "use strict"


// // DOM: Document Object Model -> js에서 html에 존재하는 데이터들을 가져올 수 있음
// const id = document.querySelector("#id"), //#은 id를 의미, #id는 id가 id인것
//     psword = document.querySelector("#psword"),
//     loginBtn = document.querySelector("button");

// loginBtn.addEventListener("click", login);

// function login(){
//     const req = {
//         id: id.value,
//         psword: psword.value
//     };

//     fetch("/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(req)
//     }).then((res) =>res.json())
//     .then(console.log) // (res => console.log(res)) 와 동일함
// }
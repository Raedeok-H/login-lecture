"use strict";

/**
 * const~ 코드는 에크마 스크립트 문법이고,
 * 
 * function~ 코드와 같은 기능임
 * function hello = (req, res){
    res.render("home/index.ejs");
    };
 */
const home = (req, res) => {
    res.render("home/index");
};
const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,  // 오브젝트(Object)는 {key:value} 구조인데,
    login   // 키 하나만 입력하면 {key:key} 처럼 생성됨
};          // {hello:hello, login:login} 으로 생성한 것과 같음

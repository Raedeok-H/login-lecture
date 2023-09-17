"use strict";

class UserStorage{
    static #users = {
        id: ["rd", "개발", "팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["readeok", "김개발", "김팀장"]
    }; // DB에 접근하는 부분인데 일단 이렇게 대체함

    static getUsers(...fields){ // 여러개를 배열로 받음
        const users = this.#users;
        // reduce를 사용 => 반복문 구조임
        // 파라미터로 받은 항목들만 남겨서 return해주기
        const newUsers = fields.reduce((newUsers, fields) => {
            if(users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
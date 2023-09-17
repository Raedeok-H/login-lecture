"use strict"

const app = require("../app");// ../ 는 상위폴더로 이동 => 상위 폴더의 app을 가져오기

// 포트 설정은 분리하여 작성하는 것이 좋음
const PORT = 3000;

// listen이 여기 www 파일에 있기 때문에 ./bin/www를 실행시켜주어야 함
app.listen(PORT, () => {
    console.log("서버 가동");
});
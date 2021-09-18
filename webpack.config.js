const path = require("path");

module.exports = {
  name: "webpack-practice-kms", // 큰 의미는 없다.
  mode: "development", // 나중에 배포용으로는 production
  devtool: "eval", // 빠르게 build 하겠다.
  resolve: {
    extensions: [".js", ".jsx"], // entry에 자동으로 적용할 확장자.
  },

  entry: {
    app: ["./src/index"], // 상대 경로 사용 가능?
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?$/, // 정규 표현식 적용 가능. 모듈을 적용할 파일의 이름 찾기. (js or jsx)
        loader: "babel-loader", // 테스트를 통과한 파일에 적용할 모듈
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        }, // 그 모듈에서 추가적으로 사용할 다른 옵션(프로그램)
      },
    ],
  }, // entry에 파일을 읽고 거기에 모듈을 적용한 후 -> webpack을 적용한다.

  output: {
    path: path.join(__dirname, "dist"), // C:/user/kms/...dist/app.js
    filename: "app.js",
  }, // 출력
};

import React from "react";
import { Component, Fragment } from "react";



class GuGuDan extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstNum: Math.ceil(Math.random() * 9),
  //     secondNum: Math.ceil(Math.random() * 9),
  //     answer: "결과 확인 중...",
  //     submit: "",
  //   };
  // }

  state = {
    firstNum: Math.ceil(Math.random() * 9),
    secondNum: Math.ceil(Math.random() * 9),
    answer: "결과 확인 중...",
    submit: "",
  };

  input: HTMLInputElement;

  submitAnswer = (e: React.BaseSyntheticEvent) => {
    if (
      parseInt(this.state.submit) ===
      this.state.firstNum * this.state.secondNum
    ) {
      this.setState({
        answer: "정답 ! " + this.state.submit,
        submit: "",
        firstNum: Math.ceil(Math.random() * 9),
        secondNum: Math.ceil(Math.random() * 9),
      });
    } else {
      this.setState({ answer: "오답 ! 다시 입력해주세요!", submit: "" });
    }

    this.input.focus();
  };

  render() {
    return (
      <Fragment>
        <h1>
          {this.state.firstNum} 곱하기 {this.state.secondNum} 는?
        </h1>
        <input
          type="text"
          value={this.state.submit}
          onChange={(e) => {
            this.setState({ submit: e.target.value });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              this.submitAnswer(e);
            }
          }}
          ref={(ref: HTMLInputElement) => { this.input = ref; }}
          onFocus={(e) => {
            e.target.style.background = "gray";
          }}
          onBlur={(e) => {
            e.target.style.background = "white";
          }}
        />
        <button onClick={this.submitAnswer}>제출</button>
        <h3>{this.state.answer}</h3>
      </Fragment>
    );
  }
}

export default GuGuDan;

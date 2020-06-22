import React, { Component } from "react";
import {
  Wrap,
  Title,
  AnswerWrap,
  Answer,
  BtnRow,
  NextBtn,
  TitleWrap,
  Time,
} from "./style";


class Question extends Component {
  questionTimer = {};
  timer = {};
  state = {
    choose: [],
    time: -1,
  }

  componentDidMount() {
    this.setTimer(this.props.data.difficulty);
    this.timer = setInterval(() => this.setState({ time: this.state.time - 1 }), 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data.id !== this.props.data.id) {
      this.setTimer(this.props.data.difficulty);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  chooseAnswer = (id) => {
    let arr = [];
    if (this.state.choose.includes(id)) {
      arr = this.state.choose.filter(item => item !== id);
      this.setState({ choose: arr });
    } else {
      arr = [...this.state.choose];
      arr.push(id);
      this.setState({ choose: arr });
    }
  }

  setTimer = (val) => {
    if (val === 0) this.setState({ time: 60 });
    if (val === 1) this.setState({ time: 90 });
    if (val === 2) this.setState({ time: 120 });
  }

  nextHandler = () => {
    this.props.nextQuestions(this.state.choose);
    this.setState({ choose: [] });
  }

  render() {
    const {
      choose,
      time,
    } = this.state;
    const {
      data,
    } = this.props;

    if (!data) return false;
    if (time === 0) this.nextHandler();

    return (
      <Wrap>
        <TitleWrap>
          <Title>{data.text}</Title>
          <Time>{time}</Time>
        </TitleWrap>
        <AnswerWrap>
          {data.responses.map(item => {
            return (
              <Answer
                key={item.id}
                active={choose.includes(item.response)}
                onClick={() => this.chooseAnswer(item.response)}
              >
                <p>{item.response}</p>
              </Answer>
            )
          })}
          <BtnRow>
            <NextBtn onClick={this.nextHandler}>
              Дальше
            </NextBtn>
          </BtnRow>
        </AnswerWrap>
      </Wrap>
    )
  }
}

export default Question;
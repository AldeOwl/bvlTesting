import React, {Component} from "react";
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
    time: 120,
  }

  componentDidMount() {
    // setTimeout(this.props.nextQuestions, 10000);
    // this.timer = setInterval(() => this.setState({time: this.state.time - 1}), 1000);
  }

  chooseAnswer = (id) => {
    let arr = [];
    if (this.state.choose.includes(id)){
      arr = this.state.choose.filter(item => item !== id);
      this.setState({choose: arr});
    } else {
      arr = [...this.state.choose];
      arr.push(id);
     this.setState({choose: arr});
    }
  }

  nextHandler = () => {
    this.props.nextQuestions(this.state.choose);
    this.setState({choose: []});
  }

  render() {
    const {
      choose,
      time,
    } = this.state;
    const {
      data,
      nextQuestions,
    } = this.props;

  console.log(data)
  if (!data) return false;

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
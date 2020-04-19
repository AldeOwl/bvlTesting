import React, {Component} from "react";
import {
  Wrap,
  Title,
  AnswerWrap,
  Answer,
  BtnRow,
  NextBtn,
} from "./style";


class Question extends Component {
  state = {
    choose: [],
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

  render() {
    const {
      choose
    } = this.state;
    const {
      data
    } = this.props;

  console.log(data)
  if (!data) return false;

  return (
      <Wrap>
        <Title>{data.text}</Title>
        <AnswerWrap>
          {data.responses.map(item => {
            return (
                <Answer
                    key={item.id}
                    active={choose.includes(item.id)}
                    onClick={() => this.chooseAnswer(item.id)}
                >
                  <p>{item.response}</p>
                </Answer>
            )
          })}
          <BtnRow>
            <NextBtn>
              Дальше
            </NextBtn>
          </BtnRow>
        </AnswerWrap>
      </Wrap>
  )
  }
}

export default Question;
import React, { Component } from "react";
import {
  Wrap,
  Content,
  Text,
  BtnRow,
  NextBtn,
} from "./style";


class Introduction extends Component {
  state = {
    page: 1,
  }

  nextHandler = () => {
    this.props.nextQuestions(this.state.choose);
    this.setState({ choose: [] });
  }

  render() {
    const {
      page,
    } = this.state;

    return (
      <Wrap>
        <Content>
          <Text>
            Привет, ИМЯ
        </Text>
          <Text>
            В 2020 году Береговая Волейбольная Лига отмечает юбилей. 25 лет мы организуем турниры и события для любителей волейбола со всего мира. А насколько хорошо ты знаешь лигу?
          </Text>
          <Text>
            В ожидании снятия ограничительных мер связанных с COVID-19 по проведению массовых мероприятий мы предлагаем тебе принят участие в викторине «БВЛ от начала времен и до наших дней» и проверить свои знания, интуицию и чувство юмора. И не просто предлагаем, а еще и подарим подарки, если ты не будешь часто ошибаться.
          </Text>
          <BtnRow>
            <NextBtn onClick={this.nextHandler}>
              Круто, я в деле!
            </NextBtn>
          </BtnRow>
        </Content>
      </Wrap>
    )
  }
}

export default Introduction;
import React, { Component } from "react";
import {
  Wrap,
  Content,
  Text,
  BtnRow,
  NextBtn,
} from "./style";
import Loader from '../../Components/Spinner/loader';
import { getTestInfo } from '../../network';


class Introduction extends Component {
  state = {
    page: 1,
    pages: [],
  }

  componentDidMount() {
    getTestInfo()
      .then(res => {
        let arr = res.split('-----');
        this.parsePages(arr);
      })
  }

  parsePages = (arr) => {
    const formatPages = [];
    arr.forEach(item => {
      const obj = {};
      if ((/===.+?===/).exec(item)) {
        obj.button = (/===.+?===/).exec(item)[0];
        obj.button = obj.button.replace(/=/g, '');
        obj.text = item.replace(/===.+?===/g, '');
        formatPages.push(obj);
      }
    })
    this.setState({ pages: formatPages });
  }

  nextHandler = () => {
    if (this.state.page === this.state.pages.length) this.props.setStep('test');
    this.setState({ page: this.state.page + 1 });
  }

  render() {
    const {
      page,
      pages,
    } = this.state;

    const {
      name
    } = this.props;

    if (pages.length === 0) {
      return (
        <Loader />
      )
    }

    return (
      <Wrap>

        <Content>
          <Text>
            {pages[page - 1].text.replace(/\[Name\]/g, name)}
          </Text>
          <BtnRow>
            <NextBtn onClick={this.nextHandler}>
              {pages[page - 1].button}
            </NextBtn>
          </BtnRow>
        </Content>
      </Wrap>
    )
  }
}

export default Introduction;
import React, { Component } from "react";
import {
  Wrap,
} from "./style";
import Test from '../../Containers/Test';
import Introduction from '../Introduction';


class TestWrap extends Component {
  state = {
    step: 'intro',
  }

  setStep = (step) => {
    this.setState({ step: step });
  }

  render() {
    const {
      step,
    } = this.state;

    const {
      name
    } = this.props;

    return (
      <Wrap>
        {step === 'intro' &&
          <Introduction
            name={name}
            setStep={this.setStep}
          />
        }
        {step === 'test' &&
          <Test />
        }

      </Wrap>
    )
  }
}

export default TestWrap;
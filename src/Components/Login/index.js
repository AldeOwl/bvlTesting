import React, { Component } from "react";
import {
  Wrap,
  RowInputWrap,
  Input,
  InputLabel,
  LoginBtn,
} from "./style";


class Login extends Component {
  state = {
    username: '',
    pass: ''
  }

  inputHandler = (key, val) => {
    this.setState({ [key]: val })
  }

  render() {
    const {
      username,
      pass
    } = this.state;

    const {
      getAuth
    } = this.props;

    return (
      <Wrap>
        <form onSubmit={(e) => getAuth(e, { login: username, password: pass })}>
          <RowInputWrap>
            <Input
              type="text"
              name="login"
              id='login'
              value={username}
              autoComplete={'no'}
              onChange={e => this.inputHandler('username', e.target.value)}
            />
            <InputLabel htmlFor="login">Логин</InputLabel>
          </RowInputWrap>
          <RowInputWrap>
            <Input
              type="password"
              name="password"
              id='password'
              value={pass}
              autoComplete='off'
              onChange={e => this.inputHandler('pass', e.target.value)}
            />
            <InputLabel htmlFor="password">Пароль</InputLabel>
          </RowInputWrap>
          <LoginBtn
            type="submit"
          >
            Войти
          </LoginBtn>
        </form>
      </Wrap >
    )
  }

}

export default Login;
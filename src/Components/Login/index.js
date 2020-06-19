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
    username: 'davnsk777@gmail.com',
    pass: 'volley1987'
  }

  inputHandler = (val) => {

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
        <form>
          <RowInputWrap>
            <Input
              type="text"
              name="username"
              value={username}
            // onChange={e => this.setCredentials('username', e.target.value)}
            />
            <InputLabel htmlFor="username">Логин</InputLabel>
          </RowInputWrap>
          <RowInputWrap>
            <Input
              type="password"
              name="pass"
              value={pass}
            // onChange={e => this.setCredentials('password', e.target.value)}
            />
            <InputLabel htmlFor="pass">Пароль</InputLabel>
          </RowInputWrap>
          <LoginBtn
            type="submit"
            onClick={(e) => getAuth(e, { login: username, password: pass })}
          >
            Войти
          </LoginBtn>
        </form>
      </Wrap>
    )
  }

}

export default Login;
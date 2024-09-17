import React, {useState, FormEvent, ChangeEvent} from 'react'
import {Wrap, RowInputWrap, Input, InputLabel, LoginBtn} from './LoginStyle'

interface LoginProps {
  getAuth: (e: FormEvent<HTMLFormElement>, credentials: {login: string; password: string}) => void
}

const Login: React.FC<LoginProps> = ({getAuth}) => {
  const [username, setUsername] = useState<string>('')
  const [pass, setPass] = useState<string>('')

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value)
    }

  return (
    <Wrap>
      <form onSubmit={(e) => getAuth(e, {login: username, password: pass})} autoComplete="off">
        <RowInputWrap>
          <Input
            type="text"
            name="login"
            id="login"
            value={username}
            autoComplete="off"
            onChange={handleInputChange(setUsername)}
          />
          <InputLabel htmlFor="login">Логин</InputLabel>
        </RowInputWrap>
        <RowInputWrap>
          <Input
            type="password"
            name="password"
            id="password"
            value={pass}
            autoComplete="off"
            onChange={handleInputChange(setPass)}
          />
          <InputLabel htmlFor="password">Пароль</InputLabel>
        </RowInputWrap>
        <LoginBtn type="submit">Войти</LoginBtn>
      </form>
    </Wrap>
  )
}

export default Login

import React, {useState, useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import './style.css'
import Login from '../../Components/Login/Login'
import TestWrap from '../../Components/TestWrap/TestWrap'
import Result from '../Results'
import Loader from '../../Components/Spinner/loader'
import {getUserName, getAuth} from '../../network/index'

const App = () => {
  const [authorization, setAuthorization] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')

  const navigate = useNavigate()

  const getName = () => {
    getUserName().then((res) => {
      if (res.id) {
        setAuthorization(true)
        setName(res.name)
        setIsLoading(false)
      } else {
        setIsLoading(false)
      }
    })
  }

  useEffect(() => {
    getName()
  }, [])

  const authHandler = (e: React.FormEvent, body: {login: string; password: string}) => {
    e.preventDefault()
    if (process.env.NODE_ENV === 'development') {
      setAuthorization(true)
      navigate('test')
    } else {
      getAuth(body).then((res) => {
        if (res.status === 200) {
          getName()
          navigate('test')
        }
      })
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login getAuth={authHandler} />} />
        <Route path="result" element={<Result />} />
        <Route path="test" element={<TestWrap name={name} authorization={authorization} />} />
      </Routes>
    </div>
  )
}

export default App
//

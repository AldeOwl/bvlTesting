const baseUrl = 'https://myvolley.ru/api'

const checkUrl = () => {
  let searchParams = new URLSearchParams(window.location.search)
  let id = searchParams.get('id')
  return parseInt(id)
}

async function getData(url, param) {
  const request = param ? `${baseUrl}${url}${id}${param}` : `${baseUrl}${url}${id}`
  const id = checkUrl()

  const res = await fetch(request)
  if (!res.ok) {
    throw new Error(`Could not fetch ${url} ${res.status}`)
  }
  return await res.json()
}

export async function sendTestResult(body) {
  const url = `${baseUrl}/test?id=${checkUrl()}&result=`
  const reqOpts = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }

  const res = await fetch(url, reqOpts)

  return res.json()
}

export async function getAuth(body) {
  const url = 'https://myvolley.ru/servlet/admins'
  const reqOpts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `login=${body.login}&password=${body.password}&repair=false&mv=1`
  }

  return await fetch(url, reqOpts)
}

export async function getUserName() {
  const res = await fetch(`${baseUrl}/util?request=user`)
  if (!res.ok) {
    throw new Error(`Could not fetch ${res.status}`)
  }
  return await res.json()
}

export async function getTest() {
  return getData(`/test?id=`)
}

export async function getTestInfo() {
  const url = checkUrl()
  const res = await fetch(`${baseUrl}/test?id=${url}&request=info`)
  if (!res.ok) {
    throw new Error(`Could not fetch ${checkUrl()} ${res.status}`)
  }
  return res.text()
}

export async function getTestResult() {
  return getData(`/test?id=`, '&request=results')
}

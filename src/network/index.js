const baseUrl = 'https://myvolley.ru/api';

const checkUrl = () => {
  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get('id');
  return parseInt(id);
};

async function getData(url, param) {
  let request = '';
  const id = checkUrl();
  param ?
    request = `${baseUrl}${url}${id}${param}`
    :
    request = `${baseUrl}${url}${id}`;

  const res = await fetch(request);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url} ${res.status}`)
  }
  return await res.json();
}

export async function sendTestResult(body) {
  const url = `${baseUrl}/test?id=${checkUrl()}&result=`;
  const reqOpts = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  const res = await fetch(url, reqOpts);

  return res.json();

};

export async function authorization(body) {
  const url = 'https://myvolley.ru/servlet/admins';
  const reqOpts = {
    method: 'POST',
    headers: {
      'Accept': 'text/html',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': 'bvl.login="davnsk777@gmail.com"; bvl.password=dd7294a1974a7e1f57d943b4c98fb167; JSESSIONID=D4964308C0E23F51B286BAA51FAE6C67'
    },
    body: `login=${body.login}&password=${body.password}&repair=false&mv=1`,
  };

  return await fetch(url, reqOpts);
};


export async function getUserName() {
  const res = await fetch(`${baseUrl}/util?request=user`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${res.status}`)
  }
  return await res.json();
}

export async function getTest() {
  return getData(`/test?id=`);
}

export async function getTestInfo() {
  const url = checkUrl();
  const res = await fetch(`${baseUrl}/test?id=${url}&request=info`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${checkUrl()} ${res.status}`)
  }
  return res.text();
}

export async function getTestResult() {
  return getData(`/test?id=`, '&request=results');
}


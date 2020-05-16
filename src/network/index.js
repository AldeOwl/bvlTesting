const baseUrl = 'https://myvolley.ru/api';

const checkUrl = () => {
  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get('id');
  return parseInt(id);
};

async function getData(url) {
  const res = await fetch(`${baseUrl}${url}${checkUrl()}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url} ${res.status}`)
  }
  return await res.json();
}

export async function sendTestResult(body) {
  const url = `${baseUrl}/test?id=225&result=`;
  const reqOpts = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return await fetch(url, reqOpts);

};

export async function getTest() {
  return getData(`/test?id=`);
}

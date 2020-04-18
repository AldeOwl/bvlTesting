const baseUrl = 'https://myvolley.ru/api';


async function getData(url) {
  const res = await fetch(`${baseUrl}${url}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url} ${res.status}`)
  }
  return await res.json();
}

export async function getTest() {
  return getData(`/test?id=225`);
}

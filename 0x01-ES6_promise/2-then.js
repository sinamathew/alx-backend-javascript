export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => { return { status: 200, body: 'success' }; }) // eslint-disable-line arrow-body-style
    .catch(() => { throw new Error(); })
    .finally(() => console.log('Got a response from the API'));
}

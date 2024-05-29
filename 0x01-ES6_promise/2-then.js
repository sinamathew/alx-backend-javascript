export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.load('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => { throw new Error(); });
}

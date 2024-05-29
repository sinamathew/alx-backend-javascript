export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (!firstName || !lastName) {
      reject(new Error('You need to provide a first and last name'));
    }

    resolve({ firstName, lastName });
  });
}

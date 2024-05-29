import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise((resolve, reject) => {
    signUpUser(firstName, lastName)
      .then(() => {
        uploadPhoto(fileName)
          .then((result) => {
            resolve({ status: 'fulfilled', value: result });
          })
          .catch((error) => {
            resolve({ status: 'rejected', value: error.toString() });
          });
      })
      .catch((error) => {
        reject(error.toString());
      });
  });
}

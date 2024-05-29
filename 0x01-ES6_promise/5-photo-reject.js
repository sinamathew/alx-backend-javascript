export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(filename);
    }, 3000);

    reject(new Error(`${filename} cannot be processed`));
  });
}

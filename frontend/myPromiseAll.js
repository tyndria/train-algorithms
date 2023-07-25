/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise(async (resolve, reject) => {
    if (iterable.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(iterable.length);

    let unresolved = iterable.length

    iterable.forEach(async (promise, index) => {
      try {
        const value = await promise;
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    })
  });
}
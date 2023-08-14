/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    const errors = new Array(iterable.length);
    let errorsNumber = 0;

    if (iterable.length === 0) {
      reject(new AggregateError([]));
    }

    iterable.forEach(async (promise, index) => {
      try {
        const result = await promise;
        resolve(result);
      } catch (err) {
        if (err) {
          errors[index] = err;
          errorsNumber += 1;

          if (errorsNumber === iterable.length) {
            reject(new AggregateError(errors));
          }
        }
      }
    });
  });
}
/**
 * @param {Array} iterable
 * @return {Promise<Array<{status: 'fulfilled', value: *}|{status: 'rejected', reason: *}>>}
 */
export default function promiseAllSettled(iterable) {
  return new Promise((resolve, reject) => {
    const result = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve([]);
      return;
    }

    iterable.forEach(async (promise, index) => {
      try {
        const promiseResult = await promise;
        result[index] = { status: 'fulfilled', value: promiseResult };
      } catch (err) {
        result[index] = { status: 'rejected', reason: err };
      } finally {
        unresolved --;

        if (unresolved === 0) {
          resolve(result);
        }
      }
    });
  });
}
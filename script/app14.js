const myFilter = (array, callback) => {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) res.push(array[i]);
  }
  return res;
};
function mySlice(arr, start = 0, end = arr.length) {
  let result = [];
  if (start < 0) start = Math.max(arr.length + start, 0);
  if (end < 0) end = Math.max(arr.length + end, 0);
  for (let i = start; i < end && i < arr.length; i++) {
      result.push(arr[i]);
  }
  return result;
}

function myIndexOf(arr, item, from = 0) {
  if (from < 0) from = Math.max(arr.length + from, 0);
  for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) return i;
  }
  return -1;
}

function myIncludes(arr, item, from = 0) {
  return myIndexOf(arr, item, from) !== -1;
}
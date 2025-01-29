function sumNumericFields(obj) {
  return Object.values(obj).reduce((sum, value) => typeof value === 'number' ? sum + value : sum, 0);
}

function sortedNumericFields(obj) {
  return Object.entries(obj)
      .filter(([key, value]) => typeof value === 'number')
      .sort((a, b) => b[1] - a[1])
      .map(([key]) => key);
}
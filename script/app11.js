function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

function cutStr(str, num) {
  if (str.length <= num) return str
  let i = num
  while (i >= 0 && !/[,.!?:; ]/.test(str[i])) i--
  if (i === 0) throw Error("first word is too big")
  return str.slice(0, i) + "..."
}

function isSubStr(str1, str2) {
  return str1.includes(str2) || str2.includes(str1)
}
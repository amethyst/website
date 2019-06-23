export function take(list, n) {
  const result = []
  for (let i = 0; i < n; i++) {
    if (!list[i]) break
    result.push(list[i])
  }

  return result
}

export function skip(list, n) {
  const result = []
  for (let i = n; i < list.length; i++) {
    if (!list[i]) break
    result.push(list[i])
  }

  return result
}

export function notNullOrEmpty(val) {
  if (!val) return false
  if (val.match(/^\s+$/)) return false
  return true
}

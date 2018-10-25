export function jointArray(arr1, arr2) {
  if (!arr1) {
    return []
  }

  if (!arr2) {
    return []
  }

  return arr1.filter((item) => arr2.includes(item))
}

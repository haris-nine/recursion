function merge (l, r) {
  const result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < l.length && rightIndex < r.length) {
    if (l[leftIndex] <= r[rightIndex]) {
      result.push(l[leftIndex])
      leftIndex++
    } else {
      result.push(r[rightIndex])
      rightIndex++
    }
  }

  return result.concat(l.slice(leftIndex)).concat(r.slice(rightIndex))
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }

  const mid = Math.floor(array.length / 2)
  
  const l = array.slice(0, mid)
  const r = array.slice(mid)

  return merge(mergeSort(l), mergeSort(r))
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))
console.log(mergeSort([-15, 100, -273, 36]))

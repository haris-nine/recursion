function fibs(n) {
  if (n <= 0) {
    return []
  }
  if (n === 1) {
    return [0]
  }

  const result = [0, 1]

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2])
  }

  return result

}

function fibsRec(n) {
  if (n <= 0) {
    return []
  }
  if (n === 1) {
    return [0]
  }

  if (n === 2) {
    return[0, 1]
  }

  const fibsSeq = fibsRec(n - 1)
  fibsSeq.push(fibsSeq[fibsSeq.length -1] + fibsSeq[fibsSeq.length -2])

  return fibsSeq
}

console.log(fibs(3))

console.log(fibs(5))

console.log(fibs(7))


console.log(fibsRec(4))

console.log(fibsRec(6))

console.log(fibsRec(8))





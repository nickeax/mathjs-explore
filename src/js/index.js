const mA = math.matrix([[1, 2], [3, 4], [5, 6]])
const mB = math.matrix([[1, -1], [2, -2], [3, -3]])
const matrixAdd = math.add(mA, mB)

const mC = math.matrix([[1, 2], [3, 4], [5, 6]])
const mD = math.matrix([[1, -1], [2, -2], [3, -3]])
const matrixSub = math.subtract(mC, mD)

console.log(`Matrix A: ${mA}`)
console.log(`Matrix A X 3: ${math.multiply(3, mA)}`)

// console.log(`Matrix Add: ${matrixAdd}`)
// console.log(`Matrix C: ${mC}`)
// console.log(`Matrix D: ${mD}`)
// console.log(`Matrix Sub: ${matrixSub}`)
// console.table(mA._data)
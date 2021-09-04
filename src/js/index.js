const rosesPrice = math.matrix([[3, 4, 2]])
const rosesDaysSold = math.matrix([[120, 80, 60], [90, 70, 40], [60, 40, 20]])

console.log(`Rose Prices Matrix: ${rosesPrice}\nRoses Sold Per Day: ${rosesDaysSold}`)
console.log(`Results: ${math.multiply(rosesPrice, rosesDaysSold)}`)
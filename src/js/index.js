const data = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]

const mean = math.mean(data)
console.log(`Mean of [${data}]: ${mean}`)

const variance = data.reduce((a, c) => a += (c - mean) ** 2) / data.length
const variance2 = math.variance(data, "uncorrected")

console.log(`Variance: ${variance}\nStandard Deviation: ${math.std(data, "uncorrected")}`)
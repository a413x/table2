export function getColSum(data, colName){
  const values = []
  for(let i = 0; i < data.length; i++){
    values.push(
      parseInt(data[i][colName])
    )
  }
  return values.reduce((accum, val) => accum + val)
}

export function getColAverage(data, colName){
  return (getColSum(data, colName)/data.length).toFixed(1)
}

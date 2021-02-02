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

export function sortData(data, colName, order){
  const sign = order === 'asc' ? 1 : -1
  const sortedData = [...data]
  sortedData.sort((a, b) => {
    let val1 = a[colName]
    let val2 = b[colName]
    if(colName === 'daysleft'){
      val1 = parseInt(val1)
      val2 = parseInt(val2)
    }
    return val1 > val2 ? sign : -sign
  })
  return sortedData
}

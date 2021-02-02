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

export function convertDate(dateStr){
  const days = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  const months = ['января', 'февраля', 'марта', 'апреля',
                  'мая', 'июня', 'июля', 'августа', 'сентября',
                  'октября', 'ноября', 'декабря']
  const date = new Date(dateStr)
  const day = date.getDay()
  const dayInMonth = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  return days[day] + '. ' + dayInMonth + ' ' + months[month] + ' ' + year + ', '
          + date.toLocaleTimeString('ru-RU')
}

export function formatDaysLeft(value){
  const daysLeft = Math.floor(value) + ''
  const lastnum = daysLeft[daysLeft.length-1];
  if(daysLeft === 1 || lastnum === 1){
    return value + ' день';
  }else if(lastnum > 1 && lastnum < 5 && (daysLeft < 10 || daysLeft > 10)){
    return value + ' дня';
  }else {
    return value + ' дней';
  }
}

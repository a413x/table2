export function getColSum(data, colName){
  const values = []
  for(let i = 0; i < data.length; i++){
    const value = parseInteger(data[i][colName])
    values.push(value)
  }
  return values.reduce((accum, val) => accum + val)
}

function parseInteger(value){
  if(!value || Number.isNaN(parseInt(value))){
    return 0
  }
  return parseInt(value)
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
      val1 = parseInteger(val1)
      val2 = parseInteger(val2)
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

export function formatDaysLeft(daysleft){
  const value = parseInteger(daysleft)
  const words = ['день', 'дня', 'дней']
  const word = words[
    (value % 100 > 4 && value % 100 < 20) ?
      2 : [2, 0, 1, 1, 1, 2][(value % 10 < 5) ? value % 10 : 5]
  ]
  return value + ' ' + word
}

export function attachScroll(){
  const firstColBody = document.querySelector('.first-col'),
    tableBody = document.querySelector('.table-body'),
    tableHead = document.querySelector('.table-head')

  tableBody.addEventListener('scroll', (e) => {
    const target = e.target
    firstColBody.scrollTop = target.scrollTop
    tableHead.scrollLeft = target.scrollLeft
  })
}

export function setScroll(){
  const firstColBody = document.querySelector('.first-col'),
    tableBody = document.querySelector('.table-body')
  tableBody.scrollTop = firstColBody.scrollTop
}

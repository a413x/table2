import {getColSum, getColAverage, formatDaysLeft} from '../utils/utils.js'
import {colNames} from './TableHead.js'

export function Total({data}) {
  const handleData = (col) => {
    if(!col.func) return ''
    let value
    if(col.func === 'sum'){
      value = getColSum(data, col.name)
    }else if(col.func === 'aver'){
      value = getColAverage(data, col.name)
    }
    if(col.name === 'daysleft'){
      return formatDaysLeft(value)
    }
    return value
  }

  return (
    <tr className = 'total'>
      <th>Итого и среднее</th>
      {colNames.slice(1).map((col, ind) =>
          <th key = {ind}>
            {handleData(col)}
          </th>
      )}
    </tr>
  );
}

import {getColSum, getColAverage} from '../utils/utils.js'

export function Total({data}) {
  return (
    <tr className = 'total'>
      <th>
        Итого и среднее
      </th>
      <th></th>
      <th>
        {getColSum(data, 'proceeds')}
      </th>
      <th>
        {getColSum(data, 'profit')}
      </th>
      <th>
        {getColAverage(data, 'daysleft')}
      </th>
    </tr>
  );
}
